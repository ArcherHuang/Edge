// npm install azure-iot-device
// npm install azure-iot-device-amqp	
// npm install mqtt --save

var MQTT_Broker = ''
var topic = ''

var clientFromConnectionString = require('azure-iot-device-amqp').clientFromConnectionString;
var Message = require('azure-iot-device').Message;

var connectionString = '';
var client = clientFromConnectionString(connectionString);

var mqtt = require('mqtt');
var opt = {
    port:1883,
    clientId: ''
};

var mqttclient = mqtt.connect('mqtt:' + MQTT_Broker, opt);
mqttclient.on('connect', function(){
    console.log('Connected MQTT Broker');
    mqttclient.subscribe(topic);
});

mqttclient.on('message', function(topic, payload){
    console.log('Receive Topic: ' + topic + ', Message: ' + payload.toString());
    var msgObj= JSON.parse(payload.toString());
    console.log(' -------------------------------- ');

    client.open(function(err){
        console.log('Azure IoT connection open ...');
        if(err){
            console.log('Could not connect: ' + err);
        }else{
            console.log('Client connected');
    
            // setInterval(function(){
    
                var time = new Date().toISOString();
                
                var data = JSON.stringify({ 
                    companyId: msgObj["companyId"],
                    msgTimestamp: msgObj["msgTimestamp"],
                    equipmentId: msgObj["equipmentId"],
                    equipmentRunStatus: msgObj["equipmentRunStatus"],
                    waferErrMesgDef: msgObj["waferErrMesgDef"],
                    waferActionMesg: msgObj["waferActionMesg"],
                    waferActionNum: msgObj["waferActionNum"],
                    waferErrMesgNum: msgObj["waferErrMesgNum"],
                    waferWorkTime: msgObj["waferWorkTime"],
                    probWorkTime: msgObj["probWorkTime"],
                    alarmWorkTime: msgObj["alarmWorkTime"]
                });
    
                var message = new Message(data);
                
                message.properties.add('MessageCatalogId', msgObj["MessageCatalogId"]);
                message.properties.add('Type', 'Message');
    
                console.log("Sending Message: " + message.getData());
                console.log("Sending Properties: " + JSON.stringify(message.properties));
    
                client.sendEvent(message, function (err) {
                    if(err){
                        console.log(err.toString());
                    }else{
                        console.log("Message sent: " + message.getData());
                    }
                });
                
            // },2000)
        }
    });
});

