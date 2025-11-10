import express from 'express';
import mysql from 'mysql2/promise';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

//for Express to get values using POST method
app.use(express.urlencoded({ extended: true }));

//setting up database connection pool
const pool = mysql.createPool({
    host: "otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "n23c4coo3es39vzt",
    password: "a95qiitmrs10jo40",
    database: "sp9a4h1so7uch8e9",
    connectionLimit: 10,
    waitForConnections: true
});

//routes
app.get('/', async (req, res) => {

    let sql = 'SELECT authorId, firstName, lastName FROM authors ORDER BY lastName';


    let sql2 = 'SELECT DISTINCT category FROM quotes'
    const [rows] = await pool.query(sql);
    const [rows2] = await pool.query(sql2);
    console.log(rows);
    res.render("home.ejs", {rows, rows2});
});


app.get('/searchByLikes', async (req, res) => {

    
    console.log(req);
    let likes1 = req.query.like1;

    let likes2  = req.query.like2;
    let sql = 'SELECT authorId, firstName, lastName, quote FROM authors NATURAL JOIN quotes WHERE likes BETWEEN ? AND ?';
    let sqlParams = [likes1, likes2];
    const [rows] = await pool.query(sql, sqlParams);
    console.log(rows)
    res.render("results.ejs", { rows })
});



app.get('/searchBycategory', async (req, res) => {
    
    let category = req.query.category;
    /// write SQL 

    let sql = 'SELECT authorId, firstName, lastName, quote FROM authors NATURAL JOIN quotes WHERE category = ?';

    const [rows] = await pool.query(sql, [category]);
    console.log(rows)
    res.render("results.ejs", { rows })
});

app.get('/searchByAuthor', async (req, res) => {
    let authorId = req.query.authorId;
    /// write SQL 
    let sql = 'SELECT authorId, firstName, lastName, quote FROM authors NATURAL JOIN quotes WHERE authorId = ?';
    const [rows] = await pool.query(sql, [authorId]);
    console.log(rows)
    res.render("results.ejs", { rows })
});

app.get('/searchByKeyword', async (req, res) => {
    console.log(req);
    let keyword = req.query.keyword;
    let sql = 'SELECT authorId, firstName, lastName, quote FROM authors NATURAL JOIN quotes WHERE quote LIKE ?';
    let sqlParams = [`%${keyword}%`];         
    const [rows] = await pool.query(sql, sqlParams);
    console.log(rows)
    res.render("results.ejs", { rows })
});

//Local API to get all info for a specific author
app.get('/API/authors/:authorId', async (req, res) => {
    let authorId = req.params.authorId;
    let sql = 'SELECT * FROM authors WHERE authorId = ?';
    const [rows] = await pool.query(sql, [authorId]);

    res.send(rows)
});




app.get("/dbTest", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT CURDATE()");
        res.send(rows);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Database error!");
    }
});//dbTest

app.listen(3000, () => {
    console.log("Express server running")
})