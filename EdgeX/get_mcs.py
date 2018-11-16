import paho.mqtt.client as mqtt  
import re  
import httplib, urllib  
import socket  
import sys  
import time

deviceId = "DmThXBo0"  
deviceKey = "54i6R9vZ7NSLqIgI"  
MQTT_SERVER = "mqtt.mcs.mediatek.com"  
MQTT_PORT = 1883  
MQTT_ALIVE = 60  
MQTT_TOPIC = "mcs/" + deviceId + "/" + deviceKey + "/+"

def on_connect(client, userdata, flags, rc):  
    print("MQTT Connected with result code "+str(rc))
    client.subscribe(MQTT_TOPIC)

def on_message(client, userdata, msg):  
    print("mqtt payload=%s" %(msg.payload))

mqtt_client = mqtt.Client()  
mqtt_client.on_connect = on_connect  
mqtt_client.on_message = on_message

mqtt_client.connect(MQTT_SERVER, MQTT_PORT, MQTT_ALIVE)  
mqtt_client.loop_forever() 