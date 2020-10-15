// sets up basic properties for our express server
var express = require("express");
var app = express();

// sets up initial port for heroku or local host
var PORT = process.env.PORT || 3001;

// sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sets up access for static middleware, i.e. styles.css and index.js, all within public folder
app.use(express.static('public'));

// points our server to the correct route files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listens to start out server
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});