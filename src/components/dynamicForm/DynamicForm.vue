
<template src="./DynamicForm.html"></template>
<script>
import {Api} from '@/utilities/Api'

export default {
    name: 'DynamicForm',
    props: ['apiUrl','dataList','demo'],
    validator: null,
    data: function () {
        return {
            formData: {},
            error:{},
            valid: true,
            menu: false
        }
    },
    methods: {
        submit(section_key) {
            this.$validator.validateAll();
            if (this.$refs.form.validate()) {
                if(this.formData.is_ajax) {
                    this.$refs.form.$el.submit();
                } else {
                    Api().post(this.formData.action,JSON.stringify(this.formData.controls[section_key].controls))
                    .then(response => {
                        console.log(response);
                    })
                    .catch(e => {
                        this
                    return false;
                    });
                }
            }
        },
        clear() {
            this.errors.clear();
        },
        changeDropdown(target_select, section_key, model, type, url,e) {
            if(type=="api") {
                Api().get('59d95ceb1000008906caf126').then(response => {
                    this.formData.controls[section_key].controls[target_select].data.src=response.data;
                })
                .catch(e => {
                    this.errors.push(e)
                });
            }
        }
    },
    computed: {
		getchilds(parentn,apin) {
		  let parent = parentn;
		  let api = apin.replace("$0", parent)
		  Api().get(api)
		    .then(response => {
		      this.childsData = response.data
		    })
		    .catch(e => {
		      this.errors.push(e)
		    })
	    }
	},
	created : function() {
        if(this.dataList && this.dataList!="") {
           this.formData=this.dataList;
        } else {
            Api().get(this.apiUrl).then(response => {
                this.formData = response.data
            })
            .catch(e => {
                this.errors.push(e)
            });
        }
    },
    mounted : function() {
        if(this.dataList && this.dataList!="") {
           this.formData=this.dataList;
        } else {
            Api().get(this.apiUrl).then(response => {
                this.formData = response.data
            })
            .catch(e => {
                this.errors.push(e)
            });
        }
    }
}
</script>
<style>
.dynamic_form .input-group.input-group--selection-controls label {
    left: 32px;
}
.field_label h3 {
    color: #666;
}
.fieldActive {
    opacity: 1;
}
.fieldInActive {
    opacity: 0.2;
}
.fieldBlock {
    margin: 0 0 20px 0;
}
</style>
