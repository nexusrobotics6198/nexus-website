const app = require("express")();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(80, ()=>{
    console.log("Listening")
})