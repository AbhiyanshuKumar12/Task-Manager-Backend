// import express from "express"

// const app = express()


// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });

// import express from "express"

// const app = express()

// app.get("/",(req,res)=>{
//     res.send("hello this is the response from server")
// })

// app.get("/about",(req,res)=>{
//     res.send("this is the about page")
// })

// app.listen(3000,()=>{
//     console.log("Server is running on port 3000");
    
// })


import app from "./src/app.js"

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
