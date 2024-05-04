// import express
const express = require('express') ;
//create path
const path =require('path') ;
// define app
const app = express() ;
// define the port for listening
const port = 3000 ;
//path usage
app.use(express.static(path.join(__dirname, 'static'))) ;

app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'login.html')) ;
});

//middle were
//getting requeste
app.get('/', (req, res)=> {
    // for getting res in text format
    const contentText = 'hello, here is my first outpout in express' ;
    //res.send(contentText) ;
    // html format
    const contentHTML = `
    <html>
        <head>
            <h1>My html content</h1>
        </head>
        <body>
            <div>hello, here is a HTML content</div>
        </body>
    </html>
    `
    //res.send(contentHTML) ;
    // Json content 
    const conentJson = `
    {
        'message' : 'here is a Json content'
    }
    `
    res.set('content-type', 'applicatiion/Json') ;
    res.statusCode = 201;
    //res.send(conentJson) ;
})

//listening requeste
app.listen(port, () => {
    console.log(`app is on port ${port}`) 
})