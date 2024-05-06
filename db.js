const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mySpace.db', err =>{
        if (err) 
                throw err
});
db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS
                users(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    firstname TEXT,
                    lastname TEXT,
                    login TEXT,
                    password TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )`);
    });
    

module.exports = db; 