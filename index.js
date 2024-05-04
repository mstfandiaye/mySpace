const express = require('express');
const app = express();
const port = 3000;

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
    res.send(JsonContent) ;
});

app.listen(port, () => {
    console.log(`on port ${port}`);
});
