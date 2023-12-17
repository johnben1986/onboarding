



const functions = require("firebase-functions");

const axios = require("axios");

exports.sitemap = functions.https.onRequest((request, response) => {
  const url = "https://eda-api.mdatsev.dev/sitemap.xml";
  axios
    .get(url)
    .then((res) => {
      response
        .contentType("application/xml")
        .set("Cache-Control", "public, max-age=300, s-maxage=600")
        .send(res.data);
    })
    .catch((err) => {
      console.log(err);
      response
        .status(500)
        .send("Something went wrong, please try again later.");
    });
});
