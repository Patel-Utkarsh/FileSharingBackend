const express = require("express");
const fileUpload = require("express-fileupload");
const upload = require("./Routes/upload");
const dbConnect = require("./config/database");
const cors = require('cors');

const app = express();

app.use(cors({
    origin : 'https://databridge-eight.vercel.app',
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type', 'Authorization']
}))


app.use(express.json());
app.use(fileUpload());
app.use(upload);

dbConnect();
app.listen(4000,()=>{
    console.log('app has started');
})
