const postgres= require('pg');

const pool =new postgres.Pool({

    user: 'fufraohjpqllfy',
    host: 'ec2-3-95-85-91.compute-1.amazonaws.com',
    password: 'e7f64f04345c22796d857a79cc6a17d66055e89bdce80df6d52128cebcd9d461',
    database: 'd2sbrm1clg819l',
    port: '5432'
});

// const pool =new postgres.Pool({

//     user: 'postgres',
//     host: 'localhost',
//     password: 'princho4',
//     database: 'notesapp',
//     port: '5432'
// });



module.exports = pool;