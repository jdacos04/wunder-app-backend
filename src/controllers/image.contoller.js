const multer = require("multer")


const img = (req,res) =>{
    res.sendFile(__dirname +'index.ejs')
    
 }
const  uploadImg = (req,res)=>{
    console.log('mira una imagen') 
    console.log(req.file);
    
 }


 module.exports={uploadImg,img}