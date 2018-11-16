# pip install paho-mqtt
# pip install requests

import paho.mqtt.client as mqtt
import requests
import json

edgeX_IP = "18.212.51.52"
broker_address = "localhost" 
port = 1883
topic = "Sensor/Temperature/Room1"

headers = {'Content-Type': 'application/json'}
endPoint = "http://" + edgeX_IP + ":48080"
resource = "/api/v1/event"

def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
    client.subscribe(topic)

def on_message(client, userdata, msg):
    print("Topic: " + msg.topic+" , Message: "+str(msg.payload))
    payload = {"device": topic.replace("/", ""), "readings": [{"name":"Temperature","value":str(msg.payload)}]}
    r = requests.post(url=endPoint+resource, headers=headers, data=json.dumps(payload))
    print(r.text)

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect(broker_address, port, 60)
client.loop_forever()