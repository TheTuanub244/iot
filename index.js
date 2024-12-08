require('dotenv').config();
const mqtt = require('mqtt');
const { MongoClient } = require('mongodb');
const connectDB = require('./connectMongoDB');

const mongoUri = process.env.MONGO_URI || "mongodb+srv://vercel-admin-user:fUMbRXDPALiyi43s@cluster0.jin5c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

connectDB()

const mqttClient = mqtt.connect("mqtts://eb4d5208a7ea4b5ea2269b63abb4237c.s1.eu.hivemq.cloud:8883", {
    username: process.env.MQTT_USERNAME || 'a',
    password: process.env.MQTT_PASSWORD || 'a',
    rejectUnauthorized: true
});

const TOPICS = ["IoT/OutDoor", "IoT/InDoor"];

async function setupMqttAndMongo() {
    
}

setupMqttAndMongo().catch(console.error);

module.exports = async (req, res) => {
    console.log("HTTP request received");
    res.status(200).send("MQTT and MongoDB setup are running successfully.");
};
