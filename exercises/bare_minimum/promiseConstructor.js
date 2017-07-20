/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  return new Promise(function(resolve, reject) {

    fs.readFile(filePath, 'utf8', function(err, content) {
      if (err) {reject(err)}
      else {
        var lines = content.split("\n");
        resolve(lines[0].slice(0, lines[0].length - 1))
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(err, response, body) {
      if (err) {reject(err)} 
      else {
        resolve(response.statusCode);
      }
    })
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};


  // request(url, function(err, response, body) {
  //   if (err) {
  //     callback(err, null);
  //     console.log('You effed up the status code dawg');
  //   } else {
  //     return callback(null, response.statusCode);
  //   }
  // })
