const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Armen:arm123546@cluster0-vi6hb.mongodb.net/kinopark?retryWrites=true&w=majority";
const client = new MongoClient(url, { useUnifiedTopology: true });

const PORT = 8080;

app.use(express.static(__dirname + '/puplic'));



app.listen(PORT, () => {
  client.connect(err => {
    if(err) throw err;
    const db = client.db("kinopark")
    console.log(db.collection('seat'));
  })
  console.log(`Server running at: http://localhost:${PORT}/`);
});