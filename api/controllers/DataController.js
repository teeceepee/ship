var http = require('http');
var request = require('request');

module.exports = {
  foo: function(req, res) {
    var url = 'http://www.bilibili.com/index/index-icon.json';
    request({
      url: url,
      encoding: null,
      gzip: true,
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(response.headers);
        return res.send(JSON.parse(body));
      }
    });
  }
};
