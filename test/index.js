var bunyan = require('bunyan');
var Baxon = require('bunyan-axon');
var Server = require('..');

describe('Server#use(fn)', function(){
  it('should registry a plugin', function(done){

    var server = new Server;

    server.bind('tcp://localhost:5000');

    server.use(function(server){
      server.on('message', function(message){
        message.should.have.property('time');
        message.should.have.property('hostname');
        message.should.have.property('msg');
        message.msg.should.eql('ting ting');
        message.should.have.property('here');
        message.here.should.eql('weee');
        done();
      });
    });

    var log = bunyan.createLogger({
      name: "testStream",
      streams:[
        {level:"info", type:"raw", stream: new Baxon("tcp://localhost:5000")}
      ]
    });
    log.info({ here: 'weee' }, 'ting ting');
  })
})
