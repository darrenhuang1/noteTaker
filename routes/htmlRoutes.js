// requires the path package to receive the correct file for the htmls
var path = require("path");

module.exports = function(app) {

    // html receives request for notes
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // html receives request for home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}