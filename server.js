const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");

const app = express();

const PORT = 5000;

app.get("/titles", (req, res) => {
  axios("https://elakiri.com/")
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      const results = $(".structItem-title")
        .children()
        .map(function (i, el) {
          return $(this).text();
        })
        .toArray();
      res.json(results);
    })
    .catch((err) => console.log(err));
});

// async function getTitles() {

// }

app.listen(PORT, () => console.log("server started " + PORT));
