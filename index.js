// Load libraries
const express = require('express');
const hbs = require('express-handlebars');

// Configure port
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000;

// Create an instance
const app = express();

// Configure handlebars
app.engine('hbs', hbs({
    defaultLayout: 'main.hbs'
}));

app.set('view engine', 'hbs');

// Configure express to parse POST application/x-www-urlencoded, application/json
// Form data is in req.body
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// Configure the routes
app.post('/register', (req, res) => {
    const {name, date, vegetarian, hobbies, language, comments} = req.body;

    res.status(201);
    res.type('text/html');
    res.render('results', {
        name, date, vegetarian, hobbies, language, comments
    });
});

app.use(express.static(__dirname + '/public'));

// Start the server
app.listen(PORT, () => {
    console.info(`Application is started on port ${PORT} at ${new Date()}`);
});