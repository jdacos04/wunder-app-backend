const {Router} = require('express');
const router = Router();
const{renderIndex}= require('../controllers/index.controller');
const { route } = require('./users.routes');
const {uploadImg,img} =require('../controllers/image.contoller')


router.get('/',renderIndex,img)
//si ya iniciamso seccion 




//si no emos iniicaod seccion 




//formulario de login 









// el login como tal 



router.post('/',uploadImg);

module.exports = router;