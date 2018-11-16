# pip install paho-mqtt

import paho.mqtt.client as mqtt 
import random

broker_address = "35.168.18.213" 
port = 1883
client_id = "Client-001"
topic = "Sensor/Temperature/Room1"
message = random.randint(0,99)

client = mqtt.Client(client_id) 
client.connect(broker_address,port) 
client.publish(topic,message)