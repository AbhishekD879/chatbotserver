const express=require("express");
const axios = require("axios");
const router=express.Router()




const emotionDetection=async(lastmsg)=>{
    
    try{
       
       let dataToSend={
        "text": `${lastmsg}`,
        "lang":"en"
        }
     
        const {data}=await axios.post('https://textprobe.p.rapidapi.com/feelings',JSON.stringify(dataToSend),{
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Host': 'textprobe.p.rapidapi.com',
                'X-RapidAPI-Key': `${process.env.API_KEY}`
              },
            
        }).catch((err)=>console.log(err))
   
        return data.emotion_prediction;
       
    }catch(err){
        return;
    }
}


router.post("/emotionAnalysis",async(req,res)=>{
    const {lastmsg}=req.body;

    const fetchedEmotion=await emotionDetection(lastmsg)
    res.status(200).send({
        emotion:fetchedEmotion
    })
})

module.exports=router