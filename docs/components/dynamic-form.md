# Dynamic Forms Component

generate dynamic form based on JSON, we use Vuetify as a [templating engine](/templating).

so we care in json to be match of how vuetify deal with form, check JSON structure:

#### JSON structure
``` js
{
  "type": "form",
  "action": "http://url",
  "method": "POST",
  "is_ajax": false,
  "controls": [
    {
      "type": "section",
      "title": "First section",
      "controls": [
        {
          "name": "email",
          "type": "email",
          "value": "",
          "validation": "required|alpha",
          "ui": {
            "label": "Email",
            "placeholder": "Enter Email",
            "flow": "2"
          }
        },
        {
          "name": "pass",
          "type": "password",
          "value": "",
          "validation": "required",
          "ui": {
            "label": "Password",
            "placeholder": "Enter Password",
            "flow": "2"
          }
        }
      ]
    }
  ]
}
```

#### so from the above JSON we care of:

1. from action.
2. enable/disbale ajax.
3. from type.
4. list of sections.

and in the field object:

``` js
{
    "name": "email", // field name
    "type": "email", // field type (text,email, password,....)
    "value": "", // value if exists
    "validation": "required|alpha", // validation using vee validate
    "ui": { // UI part
    "label": "Email", // label
    "placeholder": "Enter Email", // placeholder
    "flow": "2" // view with label or not (just placeholder).
    },
    "data": { // date for types which has list like (select, checbox, radio,...)
        "type": "api", // appear data based on api
        "url": "http://api.talentera.com/en/countries/$0/cities", // api to view the data
        "src": [ // satatic data file 
            {
            "label": "Jordan",
            "value": "jo"
            },
            {
            "label": "UAE",
            "value": "ae"
            },
            {
            "label": "Oman",
            "value": "om"
            },
            {
            "label": "Iraq",
            "value": "ir"
            }
        ]
    }
}
```

you will pass:

1. field type.
2. vale      # if exist
3. validation, we use [vee validate](/validation) for validation.
4. label.
5. placeholder.
6. [flow] view (with label line separatley or just placeholder).
7. date for types which has list like (select, checbox, radio,...).

#### list of types we support for now:

1. dropdown.
2. multipleChoice (multiple true if checkbox else radio ).
3. date.
4. longText
5. text (defualt for all other types like email, password,...).


componenet file structure

``` bash
├── src/
│   └── components/                          # list all components
│   │   └── dynamicForm/                  # component folder
│   │   │   ├── DynamicForm.vue     # component module
│   │   │   └── DynamicForm.html           # component view (html)
```


