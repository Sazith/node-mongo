const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
//link with home & office
const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.json())

const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
  }
];

//get

app.get('/', (req, res) => {
  const fruit = {
    product: 'ada',
    price: 220
  }
  res.send(fruit);
})

app.get('/fruits/banana', (req, res) => {
  res.send({ fruit: 'banana', quantity: 1000, price: 10000 })
})

app.get('/user', (req, res) => {
  const data = {users}
  res.send(data)
})

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.query.sort);
  const name = users[id].name
  const username = users[id].username
  const email = users[id].email
  res.send({ id, name,username,email })
  // res.send(users[id])
})


app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.query.sort);
  const name = users[id]
  res.send({ id, name })
})

// post

// add.post('/addUser', (req, res) => {
//   console.log('Post req send');
// }) 

app.post('/addUser', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.send({ message: 'User added', user: newUser });
});

app.listen(8000, () => console.log('listening to port 8000'))