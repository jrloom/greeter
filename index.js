const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => res.status(200).json({ message: "Good things" }));

server.listen(4000, () => console.log(`\nServer listening on port 4000\n`));
