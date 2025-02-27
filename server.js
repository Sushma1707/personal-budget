//Budget API 

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.get("/budget", (req, res) => {
    fs.readFile("budget-data.json", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading JSON file:", err);
            res.status(500).send("Server Error");
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
