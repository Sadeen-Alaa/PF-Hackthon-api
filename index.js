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
mongoose.connect("mongodb+srv://SadeenAlaa:sa987654321@cluster0.fed6m.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true ,  useFindAndModify: false })
        .then(() => {console.log('mongooDB connected')})
        .catch(() => console.error("Database Connection Error !!"));
const db_conn = mongoose.connection;

app.listen(port, () => {});