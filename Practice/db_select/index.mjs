import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
/*
//for Express to get values using POST method
app.use(express.urlencoded({extended:true}));

//setting up database connection pool
const pool = mysql.createPool({
    
    host: "your_hostname", /// Add your hostname from Database
    user: "your_username", /// Add your username from Database
    password: "your_password", /// Add your password from Database
    database: "your_database",
    connectionLimit: 10,
    waitForConnections: true
});
const conn = await pool.getConnection();
*/
//routes
app.get('/', (req, res) => {
   res.render('Hello Express app!')
});

app.get("/dbTest", async(req, res) => {
    let sql = "SELECT CURDATE()";
    const [rows] = await conn.query(sql);
    res.send(rows);
});//dbTest

app.get("/allFemaleAuthor", async(req, res) => {
    let sql = "SELECT * FROM authors WHERE sex == 'F'";
    const [rows] = await conn.query(sql);

    res.rend("allFemaleAuthor.ejs", {data: rows});
});//dbTest


app.listen(3000, ()=>{
    console.log("Express server running")
});