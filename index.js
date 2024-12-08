require('dotenv').config();
const express = require("express");

const mqtt = require('mqtt');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose')
const mongoUri = process.env.MONGO_URI || "mongodb+srv://tuanub244:AtOePUkyLEbKvv16@it4409.0ybva.mongodb.net/?retryWrites=true&w=majority&appName=it4409";

const app = express()
app.use(express.json());
const connectDB = require("./connectMongoDB");
const mqttClient = mqtt.connect("mqtts://eb4d5208a7ea4b5ea2269b63abb4237c.s1.eu.hivemq.cloud:8883", {
    username: process.env.MQTT_USERNAME || 'a',
    password: process.env.MQTT_PASSWORD || 'a',
    rejectUnauthorized: true
});

const TOPICS = ["IoT/OutDoor", "IoT/InDoor"];

async function setupMqttAndMongo() {
    try {
        connectDB();
        console.log(123)
        // const client = await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://tuanub244:AtOePUkyLEbKvv16@it4409.0ybva.mongodb.net/?retryWrites=true&w=majority&appName=it4409', {
        //     serverSelectionTimeoutMS: 7000,
        //   }).then(() => {
        //     console.log('Connected to MongoDB');
        //   }).catch((error) => {
        //     console.error('Error connecting to MongoDB:', error);
        //   });
  
        // const database = client.db("iotData");
        // mqttClient.on('connect', () => {
        //     console.log('Connected to HiveMQ');
        //     mqttClient.subscribe(TOPICS, (err) => {
        //         if (!err) {
        //             console.log(`Subscribed to topics: ${TOPICS.join(', ')}`);
        //         } else {
        //             console.error("Subscription error:", err);
        //         }
        //     });
        // });

        // mqttClient.on('message', async (topic, message) => {
        //     console.log(`Received message on topic ${topic}: ${message.toString()}`);
        //     try {
        //         const data = JSON.parse(message.toString());
        //         console.log("Parsed data:", data);
        //         const collectionName = topic.replace(/\//g, "_");
        //         const collection = database.collection(collectionName);
        //         await collection.insertOne(data);
        //         console.log(`Data stored in MongoDB collection "${collectionName}":`, data);
        //     } catch (err) {
        //         console.error("Failed to store data:", err);
        //     }
        // });

        // mqttClient.on('error', (err) => {
        //     console.error("MQTT client error:", err);
        // });
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

setupMqttAndMongo().catch(console.error);

module.exports = async (req, res) => {
    console.log("HTTP request received");
    res.status(200).send("MQTT and MongoDB setup are running successfully.");
};
