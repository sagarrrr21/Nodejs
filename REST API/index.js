const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()
const PORT = 8000;
const fs = require("fs")

app.use(express.urlencoded({ extended: false }))

// Routes

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((users) => `<li> ${users.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

// REST API
app.get('/api/users', (req, res) => {
    return res.json(users);
})


app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id == id)
        return res.json(user);
    })
    .patch((req, res) => {
        return res.json({ status: "Pending" })
    })
    .delete((req, res) => { return res.json({ status: "Pending" }) })


app.post('/api/users', (req, res) => {
    const body = req.body
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length })
    })
})


app.listen(PORT, () => { console.log(`Server Started at PORT: ${PORT}`) })