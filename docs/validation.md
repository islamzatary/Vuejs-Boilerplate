# Validation

we use [vee-validate](https://baianat.github.io/vee-validate/) for form validation.

check the [official docusmenation and demos](https://baianat.github.io/vee-validate/).

snippet example:

```html
<input v-validate="'required'" name="myinput" type="text">
<span>{{ errors.first('myinput') }}</span>
```