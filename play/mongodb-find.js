//const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('enable to connect to the db');
  }
  console.log('connected to mongo db');

  const db= client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID("5c3891c0f9e76c049cabd516")
  //
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('unable to find data',err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count:${count}`);
  //
  // },(err)=>{
  //   console.log('unable to find data',err);
  // });

  db.collection('Users').find({
    name:'efrat'
  }).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));

  },(err)=>{
    console.log('unable to find data',err);
  });



  //client.close();
});
