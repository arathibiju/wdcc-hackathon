const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'leaderboard';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  /*insertDocuments(db, function() {
    client.close();
  });*/
  findDocuments(db, function() {
      client.close();
  });
  //client.close();
});

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('leaderboard');
    // Insert some documents
    const userData = new UserData(1, 1, 1);
    collection.insertMany([
      userData
    ], function(err, result) {
      assert.equal(err, null);
      //assert.equal(3, result.n);
      //assert.equal(3, result.ops.length);
      console.log("Inserted user data into the collection");
      callback(result);
    });
}

const findDocuments = function(db, callback, userId) {
    // Get the documents collection
    const collection = db.collection('leaderboard');
    // Find some documents
    collection.find({'userId': userId}).toArray(function(err, docs) {
        userData = docs[0];
      assert.equal(err, null);
      //console.log(docs[0]);
      //var userData = toObject(docs[0]);
      //var userData = JSON.parse(docs[0]);
      console.log("Found the following records");
      //console.log(docs[0].Id);
      console.log(`User Id: ${userData.Id} \nSession Score: ${docs[0].SessionScore} \nOverall Score: ${docs[0].OverallScore}` );
      callback(docs);
    });
  }

class UserData {
    constructor(userId, userSessionScore, userOverallScore) {
        this.Id = userId;
        this.SessionScore = userSessionScore;
        this.OverallScore = userOverallScore;
    }

    getId() {
        return this.Id;
    }

    getSessionScore() {
        return this.SessionScore;
    }

    getOverallScore() {
        return this.userOverallScore;
    }


}