# sudo apt install -y python-pip
# pip install paho-mqtt

import paho.mqtt.client as mqtt

broker_address = "192.168.1.4" 
port = 1883
topic = "/MQTT"

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    client.subscribe(topic)

def on_message(client, userdata, msg):
    print("Topic: " + msg.topic+" , Message: "+str(msg.payload))

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect(broker_address, port, 60)
client.loop_forever()