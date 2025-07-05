const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url)
    console.log(myUrl)

    fs.appendFile('log.txt', log, (err, data) => {
        console.log("Hello From Sagar Server Again")

        switch (req.url) {
            case '/': res.end("HomePage")
                break
            case '/about': res.end("I am Sagar chauhan")
                break
            default:
                res.end("404 Not found")
        }
    })
    res.end("Hello From Server")
})

myServer.listen(8000, () => { console.log("Server Started!") });