const {Router} = require('express');
const router = Router();
const Users=require('../models/users');
const bycrypt =require('bcryptjs');
const jwt =require('jwt-simple');
const moment = require('moment');
const configjwt= require('../config/configjwt')

router.post('/register', async (req,res)=>{
    console.log(req.body);
    req.body.password=bycrypt.hashSync(req.body.password,10);
    const result = await Users.insert(req.body);
    console.log('si va para el baile')
    res.json({status:"1"})
    
})
const createToken = (user) =>{
    let payload ={
        userId: user,id,
        createdAT:moment().unix(),
        expiresAt:moment().add(1,'day').unix()

    }
    return jwt.encode(payload,Token-Auth)
}

router.post('/login',async(req,res)=>{
    console.log(req.body)
    const user = await Users.getByEmail(req.body.email)
    console.log(user)
    if(user === undefined){
        res.json({
            error:"ERROR, email or password not found"
        })
    }else{
        const equals = bycrypt.compareSync(req.body.password, user.password);
        if(!equals){
            res.json({
                error:"ERROR, email or password not found  2"
            })
        }else{
            res.json({
                succesfull:createToken,
                done :"Login corret"
            });
        }
    }
})

router.use(configjwt.checkToken);


router.get('/mainUser',(req,res)=>{
    Users.getById(req.userId)
    .then(rows=>{
        res.json(rows);
    })
    .catch(err=>console.log(err));
})



module.exports= router;