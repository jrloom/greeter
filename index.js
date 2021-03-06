require("dotenv").config();

console.log(process.env.MSG);

const express = require("express");

const server = express();
const port = process.env.PORT || 4000;

server.use(express.json());

server.get("/", (req, res) => res.status(200).json({ message: "Good things" }));

server.listen(port, () => console.log(`Server listening on port ${port}`));
