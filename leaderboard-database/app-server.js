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
  insertDocuments(db, function() {
    client.close();
  });
  //client.close();
});

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('leaderboard');
    // Insert some documents
    let userId = 1;
    let userOverallScore = 1;
    let userSessionScore
    let userData = 
    collection.insertMany([
      {userID : 1}, {overallScore : 1}, {sessionScore : 1}
    ], function(err, result) {
      assert.equal(err, null);
      //assert.equal(3, result.n);
      //assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
}

class userData {
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