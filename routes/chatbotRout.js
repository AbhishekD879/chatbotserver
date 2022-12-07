const express=require("express");
const axios = require("axios");
const router=express.Router()
const sendNewMessegeToBot=async(msg,id)=>{
    console.log(msg,id)
    try{
        const options = {
            method: 'POST',
            url: 'https://harley-the-chatbot.p.rapidapi.com/talk/bot',
            headers: {
              'content-type': 'application/json',
              Accept: 'application/json',
              'X-RapidAPI-Key':process.env.API_KEY,
              'X-RapidAPI-Host': 'harley-the-chatbot.p.rapidapi.com'
            },
            data: {
                "client": `${id}`,
                "bot": "harley",
                "message": `${msg}`
            }
          };
        // let datatoSend={"client":"","bot":"harley","message":`${msg}`}
        const {data:{data}}=await axios.request(options)
        console.log(data)
        return data.conversation.output;
    }catch(err){
        console.log(err)
        return;
    }
}
router.post("/newMessegeToBot",async(req,res)=>{
    const {newmsg,id}=req.body;
    const replyToMsg=await sendNewMessegeToBot(newmsg,id)
    res.status(200).send({
        type:"reciver",
        message:replyToMsg
    })
})

module.exports=router