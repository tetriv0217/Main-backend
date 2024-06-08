import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
//to perform cookies and crud opperations on it

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({limit:"16kb"}))//set the limit for data files
app.use(express.urlencoded({
    extended: true,
    limit : "16kb",
}))//to handle encoding

//this is done to keep favicon or image
app.use(express.static("public"))

app.use(cookieParser())
export { app }