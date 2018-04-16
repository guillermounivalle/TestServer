'use strict'

const express = require('express');
const app = express();

app.listen(3000, ()=>{
  console.log("API REST escuchando en el puerto 3000 para AWS");
})