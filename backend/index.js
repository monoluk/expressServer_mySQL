const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const store = require('./store')
const cors = require('cors');
const app = express()

const port = 3000

//app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors({
	origin: function(origin, callback){
	  return callback(null, true);
	},
	optionsSuccessStatus: 200,
	credentials: true
  }));

app.get('/', (req, res) => {
	res.send('Hello Team 1!')
	})



app.post('/createUser', (req, res) => {
  store.createUser({
      username: req.body.username,
      password: req.body.password
    })


fs.writeFile('./data/data.txt', req.body.username+' '+req.body.password, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

    res.send(`Add user: ${req.body.username}, with password: ${req.body.password}`)
})


app.listen(port, () => 
  console.log(`Server running on ${port}`)
)


