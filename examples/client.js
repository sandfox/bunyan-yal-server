
var bunyan = require('bunyan');
var Baxon = require('bunyan-axon');


var log = bunyan.createLogger({
  name: "testStream",
  streams:[
    {level:"info", type:"raw", stream: new Baxon("tcp://127.0.0.1:9010")}
  ]
});

setInterval(function(){
  log.info({ user: 'tobi' }, 'login');
}, 150);

setInterval(function(){
  log.info({ user: 'jane' }, 'login');
}, 1500);
