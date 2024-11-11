let express = require('express');
let app = express();

app.use(express.json());

app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/user', function (req, res){
    let first_name = req.query.first_name || 'Pritesh';
    let last_name = req.query.last_name || 'Patel';
    res.json({ first_name, last_name });
})

app.post('/user/:first_name/:last_name', function (req, res){
    let {first_name, last_name} = req.body;
    res.json({ first_name, last_name });
})
app.listen(3000, function () {
  console.log('Port 3000 is open!');
});