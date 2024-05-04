// import express
const express = require('express') ;
// define app
const app = express() ;
// define the port for listening
const port = 3000 ;

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
    res.send(conentJson) ;
})

//listening requeste
app.listen(port, () => {
    console.log(`app is on port ${port}`) 
})