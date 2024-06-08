// require('dotenv').config({path :'./env'})

import dotenv from "dotenv"
import mongoose from "mongoose";
import {DB_NAME} from './constants.js'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env',
})
connectDB()














/*

//This method is not great and should be done in db folder
import express from "express"
const app = express();
( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("Error",(error)=>{
            console.log("Error",error);
            throw error;
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ",error);
        throw err
    }
})();
*/
//use async await and try catch