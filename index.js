 const express = require('express')

 const app = express();

 app.get('/', (req, res)=>{
      res.send('I Know how to open node ...YAY');
 })

 app.listen(8000, ()=> console.log('listening to port 8000'))