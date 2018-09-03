# Confirmation Component

Use Confirmation component:
1. import Confirmation component in your page

```js
import Confirmation from '@/components/confirmation/confirmation.vue';
```

2. add the component in components object inside Vue instance

```js
  export default {
    ...,
    components: {
      Confirmation
    }
  }
```

3. add custom component in your HTML;

```html
  <Confirmation v-model="openDialog"></Confirmation>
```

#### component parameters
1. title* : (string) Dialog title
2. text* : (string) Dialog text content
3. trueBtnText : (string) OK button text, default: "OK"
4. falseBtnText : (string) Cancel button text, default: "Cancel"
5. trueBtnColor: (string) Cancel button color, default: "error"
6. maxWidth: (Nyumber) Dialog max width, default: 450px
7. v-model: (Boolean) with true value to open the dialog

#### component actions
1. onCancel, if Cancel button clicked.
2. onSuccess, if Ok button clicked.