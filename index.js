var page = require('webpage').create();
var fs = require('fs');
path = '/home/users/chartapi';
page.open(path + '/index.html', function(status) {
  setTimeout(function(){
    fs.write(path + "/test.html", page.content, 'w');
    phantom.exit();
  }, 3000);
});
