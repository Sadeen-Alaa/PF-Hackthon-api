const express                   = require("express"),
      fileUpload                = require("express-fileupload"),
      bodyParser                = require("body-parser"),
      mongodb                   = require("mongodb"),
      mongoClient               = mongodb.mongoClient,
      mongoose                  = require("mongoose"),
      path                      = require("path"),
      app                       = express(),
      port                      = process.env.PORT || 8080;
app.set("port", port);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use( fileUpload() ); 
app.get('*', function(req, res){
    res.send("hello")
});
const uri = "mongodb+srv://SadeenAlaa:sa987654321@cluster0.fed6m.gcp.mongodb.net/Cluster0?retryWrites=true&w=majority";
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
const db_conn = mongoose.connection;

app.listen(port, () => {});