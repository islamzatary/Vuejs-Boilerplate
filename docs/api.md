# API

<h2> We use [Axios](https://www.axios.com/) for HTTP client request.</h2>

<h4> Why we choose it, check the featrue from the [officail link](https://github.com/axios/axios#features)</h4>

we creat an hub for all API's to centralize all requests, here is the file structure:


``` bash
├── src/
│   └── utilities/                  
│       └── Api.js         
```


#### How to use it

1. import (import {Api,Apid} from '@/utilities/Api'
2. code for extrnal request
``` js
Api().get(link).then(response => {
    console.log(response);
})
.catch(e => {
    this.errors.push(e)
});
```
    code for internal request like language assets
    ``` js
    Apid().get(`/static/`)
      .then(reqponse => {
        console.log(response);
      })
      .catch(err => {console.log(err);})
    ```




