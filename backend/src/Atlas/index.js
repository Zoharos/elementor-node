const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.atlasDBUsername}:${process.env.atlasDBPassword}@${process.env.atlasDBHost}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch {
    // Ensures that the client will close on error
    await client.close();
  }
}
run().catch(console.dir);
const db = client.db(process.env.atlasDBName).collection(process.env.atlasDBCollection);

module.exports = db;