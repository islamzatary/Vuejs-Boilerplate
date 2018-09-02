# State Management

### we use &nbsp; [vuex](https://vuex.vuejs.org/en/) plugin.

vuex is state management library for vuejs.

and state management mean "Application Data"

it's useful when you need a specific data shared and accessible across of your application

file structure

```bash
├── src/
├── store/
│   └── modules/                   # modules folder includes each module states
│   │   ├── user.js/
│   │   ├── lang.js
│   │   └── message.js
│   └── index.js/                  # store definition where all modules included
```

### Built in actions:

1. Alert:

```js
this.$store.dispatch('alert', options);
// see https://vuetifyjs.com/en/components/alerts#api
// for all options you can use
// and check /store/alert.js
```

1. Snackbar:

```js
this.$store.dispatch('snackbar', options);
// see https://vuetifyjs.com/en/components/snackbars#api
// for all options you can use
// and check /store/snackbar.js
```

1. Loading:

```js
this.$store.dispatch('toggleLoading');
this.$store.dispatch('showLoading');
this.$store.dispatch('hideLoading');
// see https://vuetifyjs.com/en/components/progress
// this action uses progress component wrapped in full screen dialog
```
