const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const port = 3000;
const app = express();


app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()) ;

app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'login.html'));
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
