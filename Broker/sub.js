// npm install mqtt --save

var broker_address = "192.168.1.4" 
var topic = "/MQTT"

var mqtt    = require('mqtt');
const client = mqtt.connect('mqtt://' + broker_address)
 
client.on('connect', function () {
  client.subscribe(topic);
});
 
client.on('message', function (topic, message) {
  console.log(message.toString());
});