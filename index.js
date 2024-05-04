const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const port = 3000;
const app = express();


app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()) ;

app.get('/static/:filename', (req, res) => {
    console.log('params value', req.params);
    console.log('query value', req.query);
    console.log('query value', req.body);
    console.log('headers value', req.headers);
    res.sendFile(path.join(__dirname, 'static', req.params.filename));
});

app.get('/', (req, res) => {
    const HTMLcontent = `
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
    const JsonContent = `
        {
            'key', 'value'
        }
    `
    res.status(201).send(JsonContent);
    res.set('content-type', 'application/json')
    //res.send(JsonContent) ;
});

//listener
app.listen(port, () => {
    console.log(`on port ${port}`);
});
