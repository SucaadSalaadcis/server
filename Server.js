const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())


// db connection
mongoose.connect("mongodb+srv://susu:susu123@cluster0.gatcodq.mongodb.net/Kaaftoon?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Database connected Successfully...")
}).catch((err) => console.log(err))

// intaas waye





const electronicRoute = require("./routes/electronicsRoute")


app.use(electronicRoute);



app.listen(7000 , () => console.log("Server is Runing on port 5000")) 