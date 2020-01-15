const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Armen:arm123546@cluster0-qksrv.mongodb.net/kinopark?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

let creatSeat = {_id: 1, free: true};


client.connect(err => {
    if(err) throw err;
    const collection = client.db("kinopark").collection("seat");
    collection.insertOne(creatSeat, (err, res) => {
        if(err){
            console.log(err)
        }else {
        console.log('done')
        }
    })
    client.close();
  });