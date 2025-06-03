// console.log("TRAIN AREA");

// // A task
// let word = "hello";
// let letter = "l";
// let a = 0;
// for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//         a++;
//     }
// }
// console.log(`${letter} harfi ${word} so'zida ${a} marta qatnashgan.`);


console.log("Web Serverni boshlash"); 
const express = require("express"); 
const app = express(); 
const http = require("http");


// 1: Kirish code 
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


// 2: Session code 
// 3: Views code 
app.set("views", "views"); 
app.set("view engine", "ejs");
// 4 Routing code 

app.get("/", function(req, res) {
    res.render("train");
});

    const server = http.createServer(app); 
    let PORT = 3000; 
    server.listen(PORT, function () { 
        console.log(`The server is running successfully on port: ${PORT}`);
    });
