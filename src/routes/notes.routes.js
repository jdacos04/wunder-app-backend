const {Router} = require('express');
const { checkToken } = require('../config/configjwt');
const router = Router();

const { createNotes,getAllNOtes,deleteNotesbyID,updateNoteById } = require('../models/notes');
const {verifyToken,refreshToken}=require('../config/auth')

//signup

 router.get('/users/notes',verifyToken,refreshToken,getAllNOtes );
 router.get('/users/notes/id',verifyToken,refreshToken,getAllNOtes );
 router.post('/users/notes/create',verifyToken,refreshToken,createNotes);
 router.put('/users/notes/update', verifyToken,refreshToken,deleteNotesbyID)
 router.delete('/users/notes/delete', verifyToken,refreshToken,deleteNotesbyID);







module.exports = router;


