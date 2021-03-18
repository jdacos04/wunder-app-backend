const { Pool } = require('pg');
const { checkToken } = require('../config/configjwt');
const pool = require('../database');

const getAllNOtes = ({usres_id})=>{
    const userNote= usres_id
    return new  Promise(async(resolve,reject)=>{
        await pool.query('SELECT * FROM notes WHERE userId=$1 ',[userNote],(err,rows)=>{
            if (err)reject(err)
            resolve(rows);
        });
    });
};


//creacion de notas

const createNotes = ({notetitle,notetext,notecheck,notepriority,notedate,notetimeleft})=>{
    var users_id = req.userid
    console.log(users_id)
    return new Promise ((resolve,reject)=>{
        pool.query('INSERT INTO textnotes(notetitle,notetext,notecheck,notepriority,notedate,notetimeleft,usersid) VALUES($1,$2,$3,$4,$5,$6,$7)',[notetitle,notetext,notecheck,notepriority,notedate,notetimeleft,users_id],(err,
        result)=>{
            if(err)reject(err)
            if(result){
                resolve(result)
            }
        })
    })
}




const deleteNotesbyID = ({notetitel,notetext,notecheck,notepriority,notedate,notetimeleft,emailuser})=>{
    const id=req.usersid
    return new Promise ((resolve,reject)=>{
        pool.query('DELETE FROM textnotes WHERE usersid = $1',[textnotesid],(err,
        result)=>{
            if(err)reject(err)
            if(result){
                resolve(result)
            }
        })
    })
}




const updateNoteById  = ({id,notetitel,notetext,notecheck,notepriority,notedate,notetimeleft})=>{
    
    return new Promise ((resolve,reject)=>{
        pool.query(' UPDATE  textnotes SET notetitel = $2, notetext =$3,notecheck=$4,notepriority=$5,notedate=$6,notetimeleft=$7, WHERE textnoteid = $1',[id,notetitel,notetext,notecheck,notepriority,notedate,notetimeleft,emailuser],(err,
        result)=>{
            if(err)reject(err)
            if(result){
                resolve(result)
            }
        })
    })
}



module.exports = { createNotes,updateNoteById,deleteNotesbyID,getAllNOtes};