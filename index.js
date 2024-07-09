 const express = require('express')

 const app = express();

 const users = ["Asad", "Moin", "Sabed", "Susmita", "Sohana", "Sabana"];

 app.get('/', (req, res)=>{
  const fruit ={
    product : 'ada',
    price : 220
  }
      res.send(fruit);
 })

 app.get('/fruits/banana', (req, res) =>{
  res.send({fruit: 'banana', quantity: 1000, price: 10000})
 })

 app.get('/user/:id', (req, res) =>{
  const id = req.params.id ;
  console.log(req.query.sort);
 const name = users[id]
 res.send({id, name})
})


 app.get('/user/:id', (req, res) =>{
     const id = req.params.id ;
     console.log(req.query.sort);
    const name = users[id]
    res.send({id, name})
 })

 app.listen(8000, ()=> console.log('listening to port 8000'))