var clientFromConnectionString = require('azure-iot-device-amqp').clientFromConnectionString;
var Message = require('azure-iot-device').Message;

var connectionString = '';
var client = clientFromConnectionString(connectionString);

client.open(function(err){
    console.log('Azure IoT connection open ...');
    if(err){
        console.log('Could not connect: ' + err);
    }else{
        console.log('Client connected');

        setInterval(function(){

            var time = new Date().toISOString();
            
            var data = JSON.stringify({ 
                companyId: 1,
                msgTimestamp: time,
                equipmentId: "A1Machine01",
                equipmentRunStatus: 1
            });

            var message = new Message(data);
            
            message.properties.add('MessageCatalogId', 1);
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
        },2000)
    }
});