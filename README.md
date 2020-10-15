# Note Taker - Express

![license](https://img.shields.io/badge/license-None-red.svg)
![version](https://img.shields.io/badge/version-v1.0.0-blue.svg)
![express](https://img.shields.io/badge/express-4.16.4-green.svg)
## Description

The Note Taker - Express application can be used to write, save, and delete notes. The application uses an express backend and saves/retrieves note data from a JSON file. The application is deployed on Heroku following this [link](https://mysterious-castle-00244.herokuapp.com/). The app uses the following HTML and API:

  * GET `/notes` - Returns the `notes.html` file.
  
  * GET `*` - Returns the `index.html` file.

  * GET `/api/notes` - Reads the `db.json` file and returns all saved notes as JSON.

  * POST `/api/notes` - Receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete, removes the note with the given id property, and then rewrites the notes to the `db.json` file.

## Installation

The application uses an express backend which is listed as a dependency. The express package should be installed already.

## Usage

The application is deployed on Heroku following this [link](https://mysterious-castle-00244.herokuapp.com/). You can also run the server within local host by running the command `node server.js` then visiting the local host link on your web browser.

## Contributing

Files within the `public` folder were created by the UCLA Coding Bootcamp.

## Questions

If you have any questions, you can reach me through my email tpacba@live.com or connect with me on [GitHub](https://github.com/tpacba).

