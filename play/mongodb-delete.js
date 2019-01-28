//const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('enable to connect to the db');
  }
  console.log('connected to mongo db');

  const db= client.db('TodoApp');

  db.collection('Todos').deleteMany({text:'abc'}).then((res)=>{
    console.log(res);
  });

  // db.collection('Todos').deleteOne({text:'abc'}).then((res)=>{
  //   console.log(res);
  // });

  // db.collection('Todos').findOneAndDelete({completed : false}).then((res)=>{
  //   console.log(res);
  // });

  // db.collection('Users').deleteMany({name:'efrat'}).then((res)=>{
  //   console.log(res);
  // });

  // db.collection('Users').findOneAndDelete({_id : 123}).then((res)=>{
  //   console.log(res);
  // });



  //client.close();
});


// {
//     "text" : "abc",
//     "completed" : false
// }
