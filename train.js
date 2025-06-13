console.log("TRAINING STARTED");

/*                  TASK D                   */

/* Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil 
harflardan iborat bolsa true aks holda false qaytarsin

MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/

function checkContent(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = [...str1].sort().join('');
  const sortedStr2 = [...str2].sort().join('');

  return sortedStr1 === sortedStr2;
}
console.log(checkContent("mitgroup", "gmtiprou")); // true
console.log(checkContent("hello", "world")); // false
console.log(checkContent("Sohibjon", "nojbihoS")); // true

/*                  TASK C                   */

/* class Shop {
  constructor(non, lagmon, cola) {
    this.mahsulotlar = {
      non: non,
      lagmon: lagmon,
      cola: cola
    };
  }

  qoldiq() {
    console.log(`Hozir ${time}. Do'konda ${this.mahsulotlar.non} dona non, ${this.mahsulotlar.lagmon} kosa lag'mon,
       ${this.mahsulotlar.cola} dona cola bor.`);
  }

  sotish(mahsulot, miqdor) {
    if (this.mahsulotlar[mahsulot] >= miqdor) 
    {
      this.mahsulotlar[mahsulot] -= miqdor;
      console.log(`${time} da ${miqdor}ta ${mahsulot} sotildi.`)
    } else {
      console.log(`Soat ${time}. Do'konda yetarlicha ${mahsulot} yo'q.`);
    }
  }

  qabul(mahsulot, miqdor) {
        this.mahsulotlar[mahsulot] += miqdor;
        console.log(`Soat ${time}da do'konga ${miqdor}ta ${mahsulot} qabul qilindi.`);
      }


}

const shop = new Shop(4, 5, 2); 
shop.qoldiq();
shop.sotish('non', 3);
shop.qabul('cola', 4);
shop.qoldiq();

*/ 


/*                  TASK B                   */

// let mixWord = "skdfjlsdjf3847289361fdslkhfk2A223454";

// function countLetters(mixWord) {
//   let count = 0; 
//   for (let i = 0; i < mixWord.length; i++) {
//     if (mixWord[i] >= '0' && mixWord[i] <= '9') {
//       count++;
//     }
//   }
//   console.log(`Berilgan so'zda raqamlar soni: ${count}`);
// }

// countLetters(mixWord);

/*                  TASK A              */

// let word = "mexanizatsiyalshtirilgandanmisizlar"; //Sanash kerak bo'lgan so'z
// let letter = "a";

// function countLetter(word, letter) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }
//  console.log(`${word}da ${letter} harfi ${count} ta`);
// }

// countLetter(word, letter);
// countLetter(word, "m");
// countLetter("Sokhibjon", " o");
// countLetter("James", "e");


// function countLetter2(text, letter) {
//   let count = 0;
//   for (let i of text) {
//     if (i === letter) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countLetter2("mexanizatsiyalshtirilgandanmisizlar", "a"));

/*                  Lesson 21                  

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

*/

/*                  Lesson 22                 

const advice2 = [
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
    callback(null, advice2[0]);
  } else if (age <= 30) {2
    callback(null, advice2[1]);
  } else if (age <= 40) {2
    callback(null, advice2[2]);
  } else if (age <= 50) {2
    callback(null, advice2[3]);
  } else if (age <= 60) {2
    callback(null, advice2[4]);
  } else {
    setInterval(function() {
      callback(null, advice2[5]);
    }, 1000); // 2 soniya kutish
  }
}


console.log("passed here 0");
maslahatBering(70, (err, data) => {
  if (err) {
    console.log("Xatolik:", err);
  } else {
    console.log(data);
  }
});
console.log("passed here 1");/



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

  */