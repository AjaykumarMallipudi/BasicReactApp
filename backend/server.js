const express=require("express");
const cors=require("cors");
const app=express()
app.use(cors())
app.use(express.json())
let tasks=["gym","sleep"]
app.get("/tasks",(req,res)=>{
    res.json(tasks)
})
app.post("/add",(req,res)=>{
    const {task}=req.body
    if (task){
        tasks.push(task)
        res.status(201).json({ message: "Task added", task });

    }
    else{
        res.status(400).json({ error: "Task is required" });

    }
})

app.listen(3001,()=>{
    console.log("server ruuning port number 3001")
}
)