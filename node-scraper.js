var request = require('request');
var cheerio = require('cheerio');

request
  .get('http://substack.net/images/')
  .on('response', function(response) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(body),
          $body = $('body'),
          $rows = $body.find('table tr'),

          $rows.each(function(i, item) {
            var res = {};
            var $cols = $(item).find('td').each, {
              if (i === 0) res.perm = //value of td (permissions)
              if (i === 2) res.url = //value of td (url)
            }
          });
        //write each res object to csv file
        //perm & url will correspond to headers in csv file
    }
  })
  .pipe(fs.createWriteStream('images.csv'))