const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/api', (req, res) => {
  res.json({
    message: 'hei'
    , time: new Date()
  })
});

app.listen(4000, () => {
  console.log('server on ... 4000')
})