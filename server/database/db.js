 import mongoose from "mongoose";
 import dotenv from "dotenv";

 dotenv.config();

 const USERNAME = process.env.DB_USERNAME;
 const PASSWORD = process.env.DB_PASSWORD;

 const Connection = () =>{
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todo-list.hktdnie.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(MONGODB_URI, {useNewUrlParser: true})

    mongoose.connection.on('connected', () =>{
        console.log("Sucessfulll connected to mongoDB")
    });

    mongoose.connection.on('disconnect', () =>{
        console.log("Disconnected from mongoDB")
    });

    mongoose.connection.on('error', () =>{
        console.log("Error connecting to mongoDB")

    })
    

 }

 export default Connection;
