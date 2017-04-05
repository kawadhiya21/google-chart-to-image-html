# Google Charts to Image in HTML for emails
Mission: Embed Google chart in emails.

Solution: Convert it to image and extract the HTML. Head straight to [tutorial](http://codeoldschool.blogspot.com/2017/04/send-google-charts-in-email.html
) to understand its working.

## Requirements
Everything is included in the repository. Main inclusion is headless browser [PhantomJS](http://phantomjs.org/).

## Setup
```
npm install
```

Install the dependencies. Also setup the `path` variable inside `index.js`.

```
var page = require('webpage').create();
var fs = require('fs');
path = '/home/users/chartapi';
page.open(path + '/index.html', function(status) {
  setTimeout(function(){
    fs.write(path + "/test.html", page.content, 'w');
    phantom.exit();
  }, 3000);
});
```

## Execution
```
./phantomjs index.js
```

This will generate `test.html` which will contain the final html file which can be sent in email with chart image.

> [Tutorial](http://codeoldschool.blogspot.com/2017/04/send-google-charts-in-email.html
)
