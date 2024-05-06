const express = require('express');
//const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
const db = require('./db')

const app = express();

//app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()) ;

// app.get('/static/:filename', (req, res) => {
//     console.log('params value', req.params);
//     console.log('query value', req.query);
//     console.log('query value', req.body);
//     console.log('headers value', req.headers);
//     res.sendFile(path.join(__dirname, 'static', req.params.filename));
// });

app.get('/user', (req, res) => {
    var usersJSON = [];
    db.each("SELECT  * FROM users", (err,row)=>{
        console.log("row", row) ;
        usersJSON.push(row) ;
    })
    /*const HTMLcontent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
</head>
<body>
    <div>here is an html content</div>
</body>
</html>
    `
    //res.send(HTMLcontent);
    //const JsonContent = `
      //  {
        //    'key', 'value'
        //}
    //`*/
    
    res.set('content-type', 'application/json');
    res.set('server', 'mySpace server');
    res.status(200).send(usersJSON);
    //res.send(JsonContent) ;
});
app.post('/users', (req, res)=>{
    const data = req.body ;
    console.log('data form client', data) ;
    // const stmt = db.prepare(`insert into users(firstname, lastname, login, password) values(?,?,?,?)`);
   //const stmt_query_values = `${data.firstname}  ${data.lastname} ${data.login}  ${data.password}` ;

    //console.log('statement query values :', stmt_query_values) ;
    // stmt.run(stmt_query_values) ;
    // stmt.finalize();

    const sql = `INSERT INTO users(firstname, lastname, login, password) 
    values('${data.firstname}','${data.lastname}','${data.login}','${data.password}')`
    console.log('sql:', sql) ;
    db.exec(sql)

    userJson = {}

    res.set('content-type', 'application/json') ;
    res.set('server', 'mySpace server') ;
    res.status(201).send(userJson) ;
})

//listener
app.listen(port, () => {
    console.log(`on port ${port}`);
});
