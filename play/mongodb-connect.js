//const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('enable to connect to the db');
  }
  console.log('connected to mongo db');

  const db= client.db('TodoApp');
  // db.collection('Todos').insertOne({
  //   text:'somsting to do',
  //   completed:false
  //
  // },(err,res)=>{
  //   if(err){
  //     return console.log('unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(res.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name:'efrat',
  //   age:26,
  //   location:'israel'
  //
  // },(err,res)=>{
  //   if(err){
  //     return console.log('unable to insert user',err);
  //   }
  //   //console.log(JSON.stringify(res.ops,undefined,2));
  //   console.log(res.ops[0]._id.getTimestamp());
  //
  // });




  client.close();
});
