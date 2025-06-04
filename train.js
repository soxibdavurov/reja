console.log("TRAINING STARTED");
const prompt = require("prompt-sync")();


/*                  TASK A              */

let word = "mexanizatsiyalshtirilgandanmisizlar"; //Sanash kerak bo'lgan so'z
let letter = "a";

function countLetter(word, letter) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
 console.log(`${word}da ${letter} harfi ${count} ta`);
}
countLetter(word, letter);
// countLetter(word, "m");
// countLetter("Sokhibjon", "o");


/*                  Lesson 21                   */

const advice = [
    "Yaxshi talaba bo'ling", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xatolardan o'rganing", // 20-30
    "O'zingizga ishlashni boshlang", // 30-40
    "O'zingizni yaxshi his qiladigan ishni qiling", // 40-50
    "Yoshlarga investitsiya qiling", // 50-60
    "Endi dam oling", // 60+
];


function maslahatBering(age, callback) {
  if (isNaN(age)) {
    callback('Iltimos, yoshni raqam sifatida kiriting', null);
  } else if (age <= 20) {
    callback(null, advice[0]);
  } else if (age <= 30) {
    callback(null, advice[1]);
  } else if (age <= 40) {
    callback(null, advice[2]);
  } else if (age <= 50) {
    callback(null, advice[3]);
  } else if (age <= 60) {
    callback(null, advice[4]);
  } else {
    callback(null, advice[5]);
  }
}

maslahatBering(25, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Natija: ${result}`);
  }
});


/*                  Lesson 22                   */

const advice2 = [
    "Yaxshi talaba bo'ling", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xatolardan o'rganing", // 20-30
    "O'zingizga ishlashni boshlang", // 30-40
    "O'zingizni yaxshi his qiladigan ishni qiling", // 40-50
    "Yoshlarga investitsiya qiling", // 50-60
    "Endi dam oling", // 60+
];



// function maslahatBering(age, callback) {
//   if (isNaN(age)) {
//     callback('Iltimos, yoshni raqam sifatida kiriting', null);
//   } else if (age <= 20) {
//     callback(null, advice2[0]);
//   } else if (age <= 30) {2
//     callback(null, advice2[1]);
//   } else if (age <= 40) {2
//     callback(null, advice2[2]);
//   } else if (age <= 50) {2
//     callback(null, advice2[3]);
//   } else if (age <= 60) {2
//     callback(null, advice2[4]);
//   } else {
//     setInterval(function() {
//       callback(null, advice2[5]);
//     }, 1000); // 2 soniya kutish
//   }
// }


// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) {
//     console.log("Xatolik:", err);
//   } else {
//     console.log(data);
//   }
// });
// console.log("passed here 1");/



async function maslahatBering2(a) 
{
    if (typeof a !== "number") throw new Error ('Iltimos, yoshni raqam sifatida kiriting');
         else if (a <= 20) return advice2[0];
         else if (a <= 30) return advice2[1];
         else if (a <= 40) return advice2[2];
         else if (a <= 50) return advice2[3];
         else if (a <= 60) return advice2[4];
         else { 
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(advice2[5]);
                }, 2000); // 2 soniya kutish
            });
        
    }
    
}

// then/catch
console.log("passed here 0");

maslahatBering2(25).then(data =>{
    console.log("Javob:", data);
})
.catch((err) => {
    console.log("Xatolik:", err);
});
console.log("passed here 1");


// async/await

async function run() {
 let javob = await maslahatBering2(20);
 console.log(javob);
 javob = await maslahatBering2(31);
 console.log(javob);
 javob = await maslahatBering2(41);
 console.log(javob);

}

run();