import express from "express";
import mysql from "mysql2";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bhanugaur#04",
    database: "crud"
})


app.get("/",(req,res)=>{
    res.send("This is my backend server.")
})

app.get("/books",(req,res)=>{
    const q = "SELECT * FROM crud.books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books",(req,res)=>{
    const q = "INSERT INTO books (`title`,`desc`,`cover`) VALUES(?)";
    const values = [
        "title from backend",
        "desc from backend",
        "cover pic from backend",
    ];
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been created")
    })
})
app.listen(8800,()=>{
    console.log("Connected to backend")
})