const {Router} = require('express');
const { checkToken } = require('../config/configjwt');
const router = Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/notes.controller');
const { createNotes } = require('../models/notes');


//signup

// router.get('/users', getUsers);
// router.get('/users/:id', getUserById);
// router.post('/users', createUser);
// router.put('/users/:id', updateUser)
// router.delete('/users/:id', deleteUser);

router.post('/user/createnote',checkToken,createNotes)





module.exports = router;


