const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Armen:<arm123546>@cluster0-qksrv.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });


const PORT = 8000;


app.use(express.static(__dirname + '/puplic'));


app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});

client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});