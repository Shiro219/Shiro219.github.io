import express from 'express';
const app = express();
app.set("view engine", "ejs");


/// Folder for the images and css static files
app.use(express.static("public"));


/// Routes
/// Home Route
app.get('/', (req, res) => {
   let famousQuotes = quotes.getTodayQuotes();
   console.log(famousQuotes);
   res.render('home.ejs', {famousQuotes});
});

/// Starts the server

app.listen(3000, () => {
   console.log('server started');
});