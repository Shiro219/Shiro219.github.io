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
app.get('/', (req, res) => {
    res.render('home.ejs')
});

// Displays form to add a new author
app.get('/addAuthor', (req, res) => {
    res.render('addAuthor.ejs')
});

// Stores author data into the database ////////// body when post query when get
app.post('/addAuthor', async (req, res) => {
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let dob = req.body.dob
    let dod = req.body.dod
    let sex = req.body.sex
    let profession = req.body.profession
    let country = req.body.country
    let portrait = req.body.portrait
    let bio = req.body.biography
    let sql = `INSERT INTO authors
               (firstName, lastName, dob, dod, sex, profession, country, portrait, biography)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    let sqlParams = [firstName, lastName, dob, dod, sex, profession, country, portrait, bio]
    const [rows] = await pool.query(sql, sqlParams)
    res.render('addAuthor.ejs')
});

// Displays form to add a new quote
app.get('/addQuote', async (req, res) => {
    // get list of authors and pass it
    let sqlAuthors = `SELECT authorId, firstName, lastName
                      FROM authors
                      ORDER BY lastName`
    // get list of categories and pass it
    let sqlCategories = `SELECT DISTINCT category FROM quotes`

    const[authors] = await pool.query(sqlAuthors)
    const[categories] = await pool.query(sqlCategories)
    res.render('addQuote.ejs', {authors, categories}) // , {authors, categories}
});

// Stores quote into the database
app.post('/addQuote', async (req, res) => {
    // get list of authors and pass it
    let sqlAuthors = `SELECT authorId, firstName, lastName
                      FROM authors
                      ORDER BY lastName`
    // get list of categories and pass it
    let sqlCategories = `SELECT DISTINCT category FROM quotes`

    const[authors] = await pool.query(sqlAuthors)
    const[categories] = await pool.query(sqlCategories)

    let quote = req.body.quote
    let author = req.body.authorId
    let category = req.body.category
    let sql = `INSERT INTO quotes
               (quote, authorId, category)
               VALUES (?, ?, ?)`
    let sqlParams = [quote, author, category]
    const [rows] = await pool.query(sql, sqlParams)
    res.render('addQuote.ejs', {authors, categories})
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