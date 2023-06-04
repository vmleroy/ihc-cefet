import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://severo:262951@ihc-cluster.ebej11e.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "ihc-database";

let connection;
async function connect() {
  if (!connection) {
    await MongoClient.connect(uri).then((client, err) => {
      if (err) console.log(err);
      else {
        console.log("Connected successfully to database");
        connection = client.db("test");
      }
    });
  }
  return connection;
}

export default await connect();
