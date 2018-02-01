const path = require('path')
const express = require('express')

module.exports = {
  app: function () {
    const app = express()
    app.use(express.static(__dirname + '/public'));
    app.get('/', function(request, response) {
      response.sendFile(__dirname + '/index.html');
    });
    return app
  }
}
