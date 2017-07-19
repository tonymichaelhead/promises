/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {

  fs.readFile(filePath, 'utf8', function(err, content) {
    if (err) {
      callback(err, null);
      console.log('You done effed up');
    } else {
      var lines = content.split("\n");
      return callback(null, lines[0].slice(0, lines[0].length - 1));
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, function(err, response, body) {
    if (err) {
      callback(err, null);
      console.log('You effed up the status code dawg');
    } else {
      return callback(null, response.statusCode);
    }
  })
};

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
