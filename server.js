const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = 
"mongodb+srv://sokhibjon:komputer55@cluster0.ab8s7zv.mongodb.net/Reja";

mongodb.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, 
(err, client) => {
    if (err) {
        console.error("MongoDBga ulanishda xatolik:", err);
    }
    else{
    console.log("MongoDBga muvaffaqiyatli ulandik");
    module.exports = client;


    const app = require("./app");
    const server = http.createServer(app); 
    let PORT = 3000; 
    server.listen(PORT, function () { 
        console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
    });
    }
  }
);

