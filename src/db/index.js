import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
//async is used since Database is another continent
const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected!! DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO DB Connection error",error);
        process.exit(1)
    }
}

export default connectDB