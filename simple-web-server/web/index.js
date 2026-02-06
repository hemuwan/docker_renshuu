const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
  try {
    const apiRes = await axios.get('http://api:4000/api');
    res.send(`
      <h1>Web Server</h1>
      <p>${apiRes.data.hei}</p>
      <p>${apiRes.data.time}</p>
    `);
  } catch (e) {
    res.send("api server not reachable");
  }
});

app.listen(3000, () => {
  console.log("web server on ... 3000")
})