const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Armen:arm123546@cluster0-qksrv.mongodb.net/kinopark?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

let creatSeat = [];

for(let i = 1; i <= 50; i++){
    creatSeat.push( {_id: i, free: true});
}

client.connect(err => {
    if(err) throw err;
    const collection = client.db("kinopark").collection("seat");
    collection.insertMany(creatSeat, (err, res) => {
        if(err) throw err;
        console.log('done')
    });
    client.close();
  });