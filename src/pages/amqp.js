#!/usr/bin/env node

function amqp_receive()
{
  var amqp = require('/Users/wesstlab/Desktop/Mobile Project/programacion/node_modules/amqplib');

  amqp.connect('amqp://martin:n0melase@54.233.152.245:5672', function(err, conn) {
    conn.createChannel(function(err, ch) {
      var q = 'temperature';

      ch.assertQueue(q, {durable: false});
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
      ch.consume(q, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());
      }, {noAck: true});
    });
  });
}
