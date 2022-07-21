import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyBxWd0UQOpBNVrVHJg7IiQvY65ag_dtMQY",
    authDomain: "website-rater-dee9c.firebaseapp.com",
    databaseURL: "https://website-rater-dee9c-default-rtdb.firebaseio.com",
    projectId: "website-rater-dee9c",
    storageBucket: "website-rater-dee9c.appspot.com",
    messagingSenderId: "181978904864",
    appId: "1:181978904864:web:5435aad37560004eadbf45",
    measurementId: "G-NW16W4D4C5",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
function logout() {
    document.cookie = "phone=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "user_name=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "pic=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    window.location.replace("./index.html");
  }
let data = {};
function cookieData() {
  document.cookie.split("; ").forEach((element) => {
    var word = element.split("=");
    data[word[0]] = word[1];
  });
}
cookieData();
if (data.user_name == null) {
  window.alert("Logged out");
  window.location.replace("./index.html");
}

var students = [
  {
    name: "cipherGUYS",
  },
  {
    name: "Tomin Joy",
  },
  {
    name: "Akash Vijay",
  },
  {
    name: "Mathews P Mathew",
  },
  {
    name: "Reenphy George",
  },
  {
    name: "Bibin Biju",
  },
  {
    name: "Jimmy Jose",
  },
  {
    name: "Nikhil Jose",
  },
  {
    name: "Jithin Jerome ",
  },
  {
    name: "Aadit ",
  },
  {
    name: "Lloyd Sibi",
  },
  {
    name: "Johns Raju ",
  },
  {
    name: "Leon Jose Mathew",
  },
  {
    name: "Jose K James ",
  },
  {
    name: "Priya Babu ",
  },
  {
    name: "Rahul Babu",
  },
  {
    name: "Alvin varghese ",
  },
  {
    name: "Adwaith M ",
  },
  {
    name: "Justin Jolly ",
  },
  {
    name: "KARUN CHERY JAMES ",
  },
  {
    name: "Anandukrishna VR",
  },
  {
    name: "Jibbin Jacob Daniel ",
  },
  {
    name: "Bibin Benny",
  },
  {
    name: "Amal B Palackal ",
  },
  {
    name: "Megha Rajesh ",
  },
  {
    name: "Ajai Sankar Hareesh ",
  },
  {
    name: "Saranya S Nair",
  },
  {
    name: "Gautam Krishna ",
  },
  {
    name: "Juna Teres Martin ",
  },
  {
    name: "Anitta Siby ",
  },
  {
    name: "Ashik David Roy ",
  },
  {
    name: "Sweety Sonny ",
  },
  {
    name: "Allwina Anna Soy Jose",
  },
  {
    name: "Melissa Manoj Thondoli",
  },
  {
    name: "Sona Joseph",
  },
  {
    name: "Nimitha Joy",
  },
  {
    name: "Dony Tomy ",
  },
  {
    name: "Afna Ayshu Jaffin",
  },
  {
    name: "Ajo Thomas ",
  },
  {
    name: "Rithika Anilkumar",
  },
  {
    name: "Anu Mathew ",
  },
  {
    name: "Navya Saju ",
  },
  {
    name: "V S Nikhil Maheswar",
  },
  {
    name: "Rinta Maria Raju",
  },
  {
    name: "Sara Babu ",
  },
  {
    name: "Bibin Jose",
  },
  {
    name: "Swathilekshmi S ",
  },
  {
    name: "Aravind Binu",
  },
  {
    name: "Ajay Johny ",
  },
  {
    name: "Delna K Jose",
  },
  {
    name: "Shalon Mary Michael",
  },
  {
    name: "Taniya Thomas ",
  },
  {
    name: "Sreelakshmi S",
  },
  {
    name: "Anandu Unnikrishnan",
  },
  {
    name: "ashly",
  },
  {
    name: "Treesa Joseph",
  },
  {
    name: "Lakshmi Suresh",
  },
  {
    name: "Manjusree Raveendran",
  },
  {
    name: "Emy Joshy",
  },
  {
    name: "Abhishek CA",
  },
  {
    name: "JOSEPH JACOB",
  },
  {
    name: "Christi Joseph",
  },
  {
    name: "Alan Mathew Tom",
  },
  {
    name: "Ann Rosa Binu",
  },
  {
    name: "Vivekanand R",
  },
];
function rater(name,value){
    console.log(name);
    console.log(value);
    console.log(data.user_name)
    update(ref(db, `ratings/${name}/${data.user_name}`), {
      value:value
  }).then(() => {
    update(ref(db, `users/${data.user_name}/rated/${name}`), {
      value:value
  }).then(() => {
    for (let i = 1; i <=5; i++) {
        document.getElementById(`${name}-${i}`).style.color='#ccc';
    }
    for (let i = 1; i <=value; i++) {
      document.getElementById(`${name}-${i}`).style.color='#deb217';
    }
    get(child(ref(db), `ratings/${name}/`)).then((dbData) => {
      if (dbData.exists()) {
        console.log(dbData)
          var ratingVal=dbData.val();
            console.log(ratingVal)
            let count=0;
            let total=0;
            Object.keys(ratingVal).forEach(element1 => {
              count+=1;
              total+=ratingVal[element1].value;
            });
            var avg=total/count;
            document.getElementById(`${name}-rating`).innerText=`${avg}`;
      }
    });
    console.log("updated")
  });
  });
  }
  function init(){
    if(document.getElementById(`${students[0].name}-1`)){
      students.forEach(element => {
        document.getElementById(`${element.name}-1`).addEventListener("click",()=>{rater(element.name,1)});
        document.getElementById(`${element.name}-2`).addEventListener("click",()=>{rater(element.name,2)});
        document.getElementById(`${element.name}-3`).addEventListener("click",()=>{rater(element.name,3)});
        document.getElementById(`${element.name}-4`).addEventListener("click",()=>{rater(element.name,4)});
        document.getElementById(`${element.name}-5`).addEventListener("click",()=>{rater(element.name,5)});
      });
      
      get(child(ref(db), `ratings/`)).then((dbData) => {
        if (dbData.exists()) {
            var ratingVal=dbData.val();
            Object.keys(ratingVal).forEach(element => {
              let count=0;
              let total=0;
              Object.keys(ratingVal[`${element}`]).forEach(element1 => {
                count+=1;
                total+=ratingVal[element][element1].value;
              });
              var avg=total/count;
              document.getElementById(`${element}-rating`).innerText=`${avg}`;
            });
        }
      });
      get(child(ref(db), `users/${data.user_name}/rated/`)).then((dbData) => {
        if (dbData.exists()) {
            var ratedVal=dbData.val();
            Object.keys(ratedVal).forEach(element => {
              for (let i = 1; i <= ratedVal[element].value; i++) {
              document.getElementById(`${element}-${i}`).style.color='#deb217';                
              }
            });
        }
      })

    }
    else{
      setTimeout(()=>{
        init();
      },20)
    }
  }
  
  document.getElementById("logout").addEventListener("click", () => {
    logout();
  });
  document.getElementById("logOut").addEventListener("click", () => {
    logout();
  });
  init()