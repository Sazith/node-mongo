const express = require('express')
//link with home & office
const app = express();

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
  const name = users[id]
  res.send({ id, name })
})


app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(req.query.sort);
  const name = users[id]
  res.send({ id, name })
})

app.listen(8000, () => console.log('listening to port 8000'))