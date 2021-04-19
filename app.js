const express = require ('express');
const app = express();

const port = 8000;

app.get('/', (req, res) => {
     res.send("respuesta");
})

app.get('/pokemon', (req, res) => {
  res.send("Dime el nombre del pokemon")
})

app.use(express.static(__dirname + "/public"))

app.listen(port, () => {
   console.log("sirviendo", port)
})
