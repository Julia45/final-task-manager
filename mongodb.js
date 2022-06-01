// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;
const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager"

const id = new ObjectId();
console.log(id.getTimestamp())

MongoClient.connect(connectionUrl, {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log("Unable to connect");
  }

  const db = client.db(databaseName);

  const updatePromise = db.collection("users").updateOne(
      { _id: new ObjectId("62724c566633263f94ad7672")},
      {
          $set: {
              name: "Mike"
          }
      })

      updatePromise.then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)

      })
})