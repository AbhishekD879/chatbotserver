const express=require("express");
const axios = require("axios");
const router=express.Router()

const getSong=async(iddata)=>{
    const finalData=[];
    let idString=iddata.join(",")
    console.log(idString)
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/tracks/',
        params: {ids: idString},
        headers: {
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
          'X-RapidAPI-Key': `${process.env.API_KEY}`
        }
      };
      
      let {data}= await axios.request(options).catch(err=>console.log(err))
      console.log(data)
      data.tracks.forEach(track=>{
          finalData.push({
              name:track.name,
              uri:track.uri,
              artist:track.artists[0].name,
              imgUri:track.album.images[2].url
          })
      })
      return finalData;
}

const getIdofSongsFromPlayList= async(SpotifyPlayListId)=>{
    let arrofFetchedId=[];
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
        params: {id: `${SpotifyPlayListId}`, offset: '0', limit: '50'},
        headers: {
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
          'X-RapidAPI-Key': `${process.env.API_KEY}`
        }
      };
    const {data}=await axios.request(options).catch(err=>console.log(err))
     data.items.forEach(item=>{
         arrofFetchedId.push(item.track.id)
     })
     return arrofFetchedId;
}
const SongsFromPlaylist= async(SpotifyPlayListId)=>{
    if(SpotifyPlayListId){
      let iddata= await getIdofSongsFromPlayList(SpotifyPlayListId)  
      let songs= await getSong(iddata)
      return songs
    }
}


router.post("/spotifyFetch",async(req,res)=>{
    const {SpotifyPlayListId}=req.body;
    
    const fetchedSongs=await SongsFromPlaylist(SpotifyPlayListId)
   
   if(fetchedSongs.length!==0){
    res.status(200).send({
        songs:fetchedSongs
    })
   }else{
       res.status(404)
   }
})

module.exports=router