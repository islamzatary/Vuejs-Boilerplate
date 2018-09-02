<template src="./dataList.html"></template>
<script>
import { Api } from '@/utilities/Api';

export default {
  props: {
		type: {type: String, default() {return 'grid'}}, // grid, table
    hideToolbar: {type: Boolean},
    sortItems: {type: Array, default() {
      return [
        { title: this.$i18n.t('alphabetical'), value: 'name', defaultDir: 'asc'},
        { title: this.$i18n.t('creation-date'), value: 'createdAt', defaultDir: 'desc', selected: true }
			]
    }},
    url: {type: String, required: true},
		resKey: {type: String, required: true},
		selectAll: {type: Boolean},
		changeView: {type: Boolean},
		bulkActions: {type: Array},
		selectedItems: {type: Array, default() { return [] }},
		headers: {type: Array, default() { return [] }},
		lazy: {type: Boolean},
		extraFields: {type: Array, default() { return [] }},
		queries: {type: Array, default() { return [] }},
		customBtn: {type: Object},
		notifyReload: {type: Boolean}
  },
  data() {
    return {
      selected: null,
      hasData: false,
      pagination: {
        rowsPerPage: 10
      },
      keyword: '',
      limit: 10,
			sortDir: 'desc',
			sortedBy: 'createdAt',
      offset: 0,
      dataSet: [],
			totalItems: 0,
			viewType: 'grid',
			viewIcon: 'view_list',
			selectedList: this.selectedItems,
			loading: true,
			searchTimeout: null
    }
  },
  created() {
    this.selected = this.sortItems.find(el => el.selected === true).title;
		this.getData();
	},
	mounted() {
		const el = document.querySelector('.data-iterator');
		this.scrollLoad(el);
	},
  methods: {
    async getData(sort, dir, reset) {
			this.loading = true;
			// get pages number & rowsPerPage from vuetify pagination object
			const { page, rowsPerPage } = this.pagination;
			// set assessment limit to get from server, default = 10
			this.limit = rowsPerPage || this.limit;
			// count the offset to get data accourding to it (from where start get items)
			if(reset) {
				// when sort reset the pages and start from page 1
				this.offset = 0;
				this.pagination.page = 1;
			} else {
				this.offset = ((page - 1) * rowsPerPage) || 0;
			}
			let q = '';
			if(!!this.isSearch) {
				q = `&q=${this.keyword}`;
			}

			let qs = '';
			if(this.queries.length) {
				this.queries.forEach(el => {
					qs += `&${el.key}=${el.val}`
				});
			}
			// add fields, limit, offset, sort and sort direction to query body
			let fields = `?fields=${this.getFields()}&limit=${this.limit}&offset=${this.offset + q + qs}`;
			
			this.sortedBy = sort || this.sortedBy;
			this.sortDir = dir || this.sortDir;
			let query = `&sort=${this.sortedBy}:${this.sortDir}`;
			if(this.type === 'table') {
				if(!this.pagination.sortBy) {
					this.pagination.sortBy = this.headers[0].value;
				}
				if(typeof this.pagination.descending === 'undefined') {
					this.pagination.descending = false;
				}
				query = `&sort=${this.pagination.sortBy}:${this.pagination.descending === true ? 'desc' : 'asc'}`;
			}
			this.hasData = true;
			
			try {
				this.dataSet = [];
				// get the assessment according to settings above
				const data = (await Api().get(`/${this.url + this.isSearch + fields + query}`)).data;
				if(this.lazy) {
					this.dataSet = [...this.dataSet, ...data.data[this.resKey]];
				} else {
					this.dataSet = data.data[this.resKey];
				}
        this.totalItems = data.data.count;
        this.$emit('getData', this.dataSet);
			} catch (error) {
				this.$store.dispatch('alert', {type:"error", text: 'Server Error' });
			} finally {
				this.hasData = false;
				this.loading = false;
			}
			this.$emit('resetNotify', false);
		},
		scrollLoad(el) {
			if(this.lazy && el) {
				el.onscroll = () => {
					const listWrapper = el.firstElementChild;
					let bottomOfIterator = listWrapper.scrollTop + el.innerHeight === listWrapper.offsetHeight;
					if(bottomOfIterator) {
						this.offset = this.offset + 10;
						this.getData();
					}
				}
			}
		},
    toggleDir() { // toggle asc / desc
			this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
			this.getData(this.sortedBy, this.sortDir, true);
		},
    sort(by) {
			this.offset = 0;
			this.getData(by.value, by.defaultDir || this.sortDir, true);
			this.sortDir = by.defaultDir || this.sortDir;
			this.selected = by.title;
		},
		toggleAll() { // select all Items in the page
			if(this.selectedList.length)
				this.selectedList = [];
			else 
				this.selectedList = this.dataSet.slice().map(el => el.id);
			this.$emit('update:selectedItems', this.selectedList);
		},
		switchView() {
			this.viewIcon = this.viewIcon === 'view_module' ? 'view_list' : 'view_module';
			this.viewType = this.viewType === 'grid' ? 'list' : 'grid';
			this.$emit('onSwitchView', this.viewType);
		},
		getFields() {
			let fields = 'count';
				this.extraFields.forEach(el => {
					fields += `,${el}`;
				});
			return fields;
		},
		keySearch() {
			clearTimeout(this.searchTimeout);
			this.searchTimeout = setTimeout(() => {
				this.getData();
			}, 500);
		}
  },
  computed: {
		sm() { return this.$vuetify.breakpoint.smAndDown },
		isSearch() {
			if(this.keyword.length > 0)
				return '/search';
			return '';
		}
	},
  watch: {
		pagination: {
			handler (oldPag, newPag) {
				if(JSON.stringify(oldPag) !== JSON.stringify(newPag) && newPag.page)
					this.getData();
			},
			deep: true
		},
		dataSet(oldVla, newVal) {
			if(oldVla.length > 0 && newVal.length > 0)
				if(oldVla.length != newVal.length) {
					this.getData();
				}
		},
		notifyReload(oldVal, newVal) {
			if(oldVal === true && newVal === false) {
				this.getData();
			}
		},
	}
}
</script>

<style scoped>
.sort-wrapper {
	border-left: 1px solid #F2F2F2;
}
.sort-select {
	height: inherit;
}
.sort-label {
	color: rgba(63,63,63,0.4);
}
.data-listing .data-iterator {
  margin: 0 -16px !important;
}
.sort-rotate {
	transform: rotate(180deg);
}
</style>

