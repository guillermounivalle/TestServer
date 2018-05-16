'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//adding listeners
app.get('/firstEndPoint/:name', (req, res) => {
  res.status(200).send({message: `My First EndPoint to the world for ${req.params.name}`})
})

//GET Example 1
app.get('/api/getExample/', (req, res) => {
  res.status(200).send({ elements:[] })
})

//GET Example 2
app.get('/api/getExampleWithParam/:element', (req, res) => {
  res.status(200).send({message: `Api Rest GET with param =====> ${req.params.element}`})
})


//POST Example 1
app.post('/api/postExample/', (req, res) => {
  console.log("Element", req.body)
  res.status(200).send({message: `The element has been received `})
})

//POST Example 2
app.put('/api/put/:element', (req, res) => {
  res.status(200).send({message: `Api Rest PUT with param =====> ${req.params.element}`})
})


//DELETE Example 2
app.put('/api/delete/:element', (req, res) => {
  res.send({message: `Api Rest PUT with param =====> ${req.params.elemet}`})
})

app.listen(port, ()=>{
  console.log(`API REST ecorriendo en http://localhost:${port} para AWS`);
})