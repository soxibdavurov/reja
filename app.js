console.log("Web Serverni boshlash"); 
const express = require("express"); 
const app = express(); 
const fs = require("fs");


let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.error("Faylni o'qishda xatolik:", err);
        return;
    }
    else {
        user = JSON.parse(data);
      
    } 
});

// MongoDBga ulanish
const db = require("./server").db();
    
// 1: Kirish code 
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


// 2: Session code 
// 3: Views code 
app.set("views", "views"); 
app.set("view engine", "ejs");
// 4 Routing code 
app.post("/create-item", (req, res) => {
    
    console.log('user entered / create-item');
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja},  (err, data) => {
        if (err) {
            console.log(err);
            res.end("Xatolik yuz berdi");
        } else {
            res.end("Successfully added");
        }
});
});


app.get("/", function(req, res) {
    console.log('user entered /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("Xatolik yuz berdi");
        } else {
res.render("reja", {items: data});
        }
});

});

module.exports = app;