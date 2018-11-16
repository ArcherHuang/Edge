# import paho.mqtt.client as mqtt

import paho.mqtt.publish as publish
import time
import random

HOST = "192.168.1.4"
PORT = 1883
TOPIC = "/MQTT"
client_id = "client_id"

message = random.randint(0,99)
print("message: "+str(message))
publish.single(TOPIC, message, qos = 1, hostname=HOST, port=PORT, client_id=client_id)
