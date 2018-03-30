'use strict';

const request = require('request');
const parsePodcast = require('node-podcast-parser');

function createResponse(statusCode, message) {
  return {
    statusCode: statusCode,
    headers: { 
      "Access-Control-Allow-Origin": "*" 
    },
    body: JSON.stringify(message)
  };
}

module.exports.hello = (event, context, callback) => {
  request('http://korea-now-podcast.libsyn.com/rss', (err, res, data) => {
    if (err) {
      console.error('Network error', err);
      return;
    }
  
    parsePodcast(data, (err, data) => {
      if (err) {
        console.error('Parsing error', err);
        return;
      }
  
      console.log(data);

      callback(null, createResponse(200, data));
    })
  });
};
