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

app.get('/posts', (req,res) => {
    const posts = new Array(20);
    posts.fill({title: "Lorem Ipsum", body: "Lorem Lorem Lorem Ipsum Lorem Ipsum est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"})
    console.log(posts);
    res.status(200).json(posts);
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})