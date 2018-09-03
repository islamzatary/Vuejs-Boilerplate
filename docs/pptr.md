# PPTR

<h3> We are using [Puppeteer](https://pptr.dev/).
for screenshots and generate PDF file, the good part in PPTR is using the Chrome/Chromium headless.
</h3>

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