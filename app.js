console.log("Web Serverni boshlash"); 
const express = require("express"); 
const app = express(); 
const fs = require("fs");

// MongoDBga ulanish
const db = require("./server").db();
const mongodb = require("mongodb");
    
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
        console.log(data.ops);
        res.json(data.ops[0]);
        
});
});

// Delete code
app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    console.log('user entered / delete-item');
    db.collection("plans").deleteOne(
        {_id: new mongodb.ObjectId(id)},
        function (err, data) {
        if (err) {
            console.log(err);
            res.end("Xatolik yuz berdi");
        } else {
            res.json({state: "success"});
        }
    });
});

// Edit code
app.post("/edit-me", (req, res) => {
    const id = req.body.id;
    const reja = req.body.reja;
    console.log('user entered / edit-me');
    db.collection("plans").findOneAndUpdate(
        {_id: new mongodb.ObjectId(id)},
        {$set: {reja: reja}},
        {returnOriginal: false},
        function (err, data) {
            if (err) {
                console.log(err);
                res.end("Xatolik yuz berdi");
            } else {
                res.json(data.value);
            }
        }
    );
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