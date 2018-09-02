# SSR

<h2> I am using [Puppeteer](https://pptr.dev/) as a Server side rendering</h2>

i use it for screenshots and generate PDF file, the good part in PPTR is using the Chrome/Chromium headless.

check PPTR [features](https://developers.google.com/web/tools/puppeteer/)

here is strucrure

``` bash
├── pptr/
│   └── screenshots/                  
├───├── pdf.js
│   └── screenshots.js         
```


Example of Command line:

``` bash
node pptr/pdf.js ## generate PDF file from home page

node pptr/screenshots.js ## generate Screenshot from home page
```