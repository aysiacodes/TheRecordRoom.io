//placeholder for server .js requests taken from pfeil. 

const express = require('express');
const app = express();
//needed to facilitate MongoDB integration
const { MongoClient, ObjectId } = require('mongodb');
//needed for cross-origin resource sharing
const cors = require('cors');
app.use(cors());
//needed to extract info in request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8080;
app.get("/", (req, res) => {
res.send("Hello world!");
});
app.get("/other", (req, res) => {
res.send("Hello, again!");
});
app.listen(PORT, () => {
console.log("Now listening on port " + PORT);
});
