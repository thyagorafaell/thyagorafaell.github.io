var http = require('http');
var serveHandler = require('serve-handler');
var watch = require('watch');
var buildFunctions = require('./buildFunctions');
var config = require('../config');

var server = http.createServer(function(request, response) {
    return serveHandler(request, response, {
        public: './dist'
    });
});

watch.createMonitor('./src', function(monitor) {
    monitor.on('created', function(file) {
        console.log('Created ', file);
        buildFunctions.build();
    });
    monitor.on('changed', function(file) {
        console.log('Changed ', file);
        buildFunctions.build();
    });
    monitor.on('removed', function(file) {
        console.log('Removed ', file);
        buildFunctions.build();
    });
});

server.listen(config.port, function() {
    console.log('Running at http://localhost:' + config.port);
});