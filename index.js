const express=require("express");
const cors=require("cors")
const chatbotRout=require("./routes/chatbotRout")
const emotionAnalysis=require("./routes/emotionAnalysis")
const SpotifyScraper=require("./routes/spotifyFetch")
const songsFromEmotion=require("./routes/songsFromEmotion")
require("dotenv").config()
const app=express()
app.use(cors())
app.use(express.json())
app.use("/chatBot",chatbotRout)
app.use("/emotion",emotionAnalysis)
app.use("/spotify",SpotifyScraper)
app.use("/emotionsongs",songsFromEmotion)
const PORT=process.env.PORT||5000



app.get("/",(req,res)=>{
    res.status(200).send("connected")
})

app.listen(PORT,()=>{
    console.log(`server listining on Port ${PORT}`)
})