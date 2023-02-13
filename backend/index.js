// Building an Express Server 
import express from "express"
import mysql from "mysql"

const app = express()

// Create database connection to MySql
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ishani2011",
    test: "test" // matches db name in mysql
})

// If there is an authentication problem, use:
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ishani2011';

// Reach backend server
app.get("/", (req, res) => {
    res.json("Hello this is the backend")
})

app.get("/clothes", (req, res) => {
    // returns all clothes in db
    const q = "SELECT * FROM test.clothes;"

    // runs any query from the db 
    db.query(q, (err, data) => {
        if (err) return res.json(err) // return error message 
        return res.json(data) // return data if no error
    })
})

// Send table information
app.post("/clothes", (req, res) => {
    const q = "INSERT INTO books (`title`, `desc`, `picture`) VALUE (?)"
    const values = ["title from backend", "desc from backend", "picture from backend"]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err) // return error message 
        return res.json(data) // return data if no error
    })
})


app.listen(8800, () => {
    console.log("Connected to backend!")
})