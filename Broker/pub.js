// npm install mqtt --save

var broker_address = "192.168.1.4" 

const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://' + broker_address)

var state = 'closed'
var message = Math.floor(Math.random()*100)
var topic = "/MQTT"

client.on('connect', () => {
  console.log('message: %d', message);
  client.publish(topic, message.toString())
  client.end();
})