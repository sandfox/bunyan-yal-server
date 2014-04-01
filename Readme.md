
# bunyan-yal-server

  Extensible log server for [Bunyan](https://github.com/trentm/node-bunyan) + [bunyan-axon](https://github.com/sandfox/bunyan-axon)
  forked from [YAL](https://github.com/segmentio/yal).

## Installation

```
$ npm install bunyan-yal-server
```

## Example

 Running bunyan-yal-server with a simple stdout plugin:

```js
var Server = require('bunyan-yal-server');
var server = new Server;

server.bind('tcp://localhost:5000');
server.use(stdout);

function stdout(server){
  server.on('message', function(msg){
    console.log(msg);
  });
};
```

## Plugins

  Plugins are simply functions that accept the `server` instance,
  so you can listen on "message" events and do whatever you like.

# License

  MIT
