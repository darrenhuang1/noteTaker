// requires fs package to write to db.json
var fs = require("fs");

// links the routes to "data source"
var notesData = require("../db/db.json");


module.exports = function(app) {

    // API receives routes
    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    })

    // API post request
    app.post("/api/notes", function(req, res) {

        // assigns an id based on the index in array
        req.body.id = notesData.length + 1;

        // pushes to notesData array then rewrites to db.json
        notesData.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(notesData), function(err) {
            if (err) throw err;
        })

        // completes the post request
        res.json(true)
    })

    // API delete request
    app.delete("/api/notes/:id", function(req, res) {

        // checks if item in notesData array matches the user's id parameter
        for(const value of notesData) {
            if(value.id == req.params.id) {

                // splices item from notesData array
                var i = notesData.indexOf(value);
                notesData.splice(i, 1);

                // reassigns id according to index in array
                for (var i = 0; i < notesData.length; i++) {
                    notesData[i].id = i + 1;
                }

                // rewrites code to db.json
                fs.writeFile("./db/db.json", JSON.stringify(notesData), function(err) {
                    if (err) throw err;
                })

                // completes the delete request
                res.json(true);
            }
        }
    })
}