# Data listings Component

### Article describe what is data listing &nbsp; [https://medium.com/@darrenjennings/data-driven-vue-js-53e84f16e28f](https://medium.com/@darrenjennings/data-driven-vue-js-53e84f16e28f)

This component is a wrapper for Vuetify [Data Iterator](https://vuetifyjs.com/en/components/data-iterator#introduction) and [Data table](https://vuetifyjs.com/en/components/data-tables#introduction) components, with some improvements.

Some pages use data-listing component : (assessments, candidates, batches, purposes, user management)

Use DataListing Component:

1. import DataListing component in your page

```js
import DataList from '@/components/dataList/dataList.vue';
```

2. add the component in components object inside Vue instance

```js
  export default {
    ...,
    components: {
		  'data-listing': DataList,
	  }
  }
```

3. add custom component in your HTML;

```html
  <data-listing></data-listing>
```

or, with scoped-slots :

```html
  <data-listing>
    <template slot-scope="data">
      ... Your HTML for each record in the Array
    </template>
  </data-listing>
```

#### component parameters

1. type : (string) default value: 'grid' , has two values 'grid' and 'table'
   this parameter draw the data in 'data-iterator' if the value is 'grid', or 'data-table' if the value is 'table'.
2. hideToolbar: (Boolean) default value: false.
3. sortItems: (Array), this parameter add sort by values in the toolbar menu
   default value(alphabetical, creation date):

```js
[
  { title: this.$i18n.t('alphabetical'), value: 'name', defaultDir: 'asc' },
  {
    title: this.$i18n.t('creation-date'),
    value: 'createdAt',
    defaultDir: 'desc',
    selected: true
  }
];

// title: for item label
// value: this will send to the server
// defaultDir: default sort type 'asc', 'desc'
// select: selected option
```

4. url: (string) \*required : url for REST API end point, eg. 'assessments', 'candidates'.
5. resKey: (string) \*required : what is the array key in the response data ? eg. 'candidates', 'batches'.
6. selectAll: (Boolean) default value: false, show or hide select all checkbox in the toolbar.
7. changeView: (Boolean) default value: false, show or hide switch view icon in toolbar, eg. see 'candidates'.
8. bulkActions: (Array) Add bulk actions in the toolbar ('this parameter not ready to use') :

```js
bulkActions: [
  { title: 'delete', icon: 'delete' },
  { title: 'attach', icon: 'attach_file' }
];
```

9. selectedItems: (Array), this is a sync(two way) parameter used for store all IDs for selected items :

```html
  <data-listing :selectedItems.sync="selectedItems">
    <template slot-scope="data">
      ...
      <v-checkbox color="primary" hide-details :value="data.item.id" v-model="selectedItems"></v-checkbox>
      ...
    </template>
  </data-listing>
```

```js
export default {
  data() {
    return {
      selectedItems: []
    };
  }
};
// for each item selected will store it's ID in this Array
```

10. headers: (Array) : this is used with table type only to add it's headers

```js
  headers: [
    {text: 'Name', value: 'firstName'},
    {text: 'Email', value: 'email'},
    {text: 'Role', value: 'role'},
    {text: 'Status', value: 'status'},
    {text: '', value: 'name', sortable: false}
  ],

  // text: item label
  // value: for server
  // sortable: if this column is sortable
```

11. lazy: (Boolean) : (not ready), this parameter removes pagination and the data will be loaded on scroll.
12. extraFields: (Array of strings) : extra parameters will send with the request.
13. queries: (Array), extra queries will send with the request.

```html
  <data-listing :queries="[{key: 'stage', val: 'submitted'}]"></data-listing>
  <!-- this will converted to '?stage=submitted' -->
```

14. customBtn: (Object): Add custom button to toolbar

```html
  <data-listing :customBtn="{text: 'Add Candidate', event: 'addCandidate', color: 'primary', outline: true}" @addCandidate="onAddCandidate"></data-listing>
  <!--
    text: Button text
    event: event will emitted when this button clicked and youi can listen to it, see 'create-batch' second step
    color: button color
    outline: make button outlined or filled
   -->
```

15. notifyReload: (Boolean), each time this value changed to true, the component will reload, 'useful when deleting item'

#### component actions

1. getData: each response data will stored in this action event.
2. resetNotify: to reset 'notifyReload' prop to false.
3. onSwitchView: will emitted each time 'switchView' button clicked.
