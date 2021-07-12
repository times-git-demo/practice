const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    // Query Params
    const id = req.query.id;
    const name = req.query.name;
    console.log("id", id);
    console.log("name", name);
    // Headers
    console.log(req.headers);
    console.log(req.url);
    res.status(200).send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})