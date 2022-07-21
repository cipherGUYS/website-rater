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
const l = console.log;
let mob;
let data = {};
function cookieData() {
    document.cookie.split('; ').forEach(element => {
        var word = element.split('=');
        data[word[0]] = word[1];
    });
}
cookieData();
function printer() {
    l("hi");
    l(data)
    document.getElementById('pPic').style.backgroundImage = `url(${data.pic})`;
    document.getElementById('pName').innerText = data['user_name'];
    document.getElementById('fName').value = data['user_name'];
    if (data.phone == "null") {
        document.getElementById('pNumber').innerText = "Not provided"
    } else {
        document.getElementById('pNumber').innerText = data['phone'];
        document.getElementById('fNumber').value = data['phone'];
    }
    document.getElementById('pEmail').innerText = data['email'];
    document.getElementById('fEmail').value = data['email'];
    document.getElementById('Head Name').innerText = ` Hello, ${data['user_name']}`;
}

function checker() {
    cookieData();
    get(child(ref(db), `users/${data.user_name}/`)).then((dbData) => {
        if (dbData.exists()) {
            mob = dbData.val().phone;
            document.getElementById('pPic').style.backgroundImage = `url(${dbData.val().pic})`;
            document.getElementById('pName').innerText = dbData.val().disp_name;
            document.getElementById('fName').value = dbData.val().disp_name;
            if (dbData.val().phone == "null") {
                document.getElementById('pNumber').innerText = "Not provided"
            } else {
                document.getElementById('pNumber').innerText = dbData.val().phone;
                document.getElementById('fPhone').value = dbData.val().phone;
            }
            document.getElementById('pEmail').innerText = dbData.val().email;
            document.getElementById('fEmail').value = dbData.val().email;
            document.getElementById('Head Name').innerText = ` Hello, ${dbData.val().disp_name}`;
        } else {
            update(ref(db, `users/${data.user_name}/`), {
                disp_name: data.user_name,
                phone: data.phone,
                email: data.email,
                pic: data.pic,
                token: data.token
            }).then(() => {
                checker();
            });
        }
    }).catch(err => {
        l(err);
    })
}

function updater() {
    update(ref(db, `users/${data.user_name}/`), {
        disp_name: document.getElementById('fName').value,
        phone: document.getElementById('fPhone').value,
        registered_with: data.email,
        email: document.getElementById('fEmail').value
    }).then(() => {
        //data.user_name = document.getElementById('fName').value;
        document.cookie = `phone = ${mob}`;
        document.cookie = `disp_name = ${document.getElementById('fName').value}`;
        checker();
    });
}
function logout() {
    document.cookie = 'phone=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'user_name=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'pic=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.replace('./index.html');
}

if (data.user_name) {
    checker();
} else {
    window.alert("Logged out");
    window.location.replace("./index.html");
}
document.getElementById('update button').addEventListener("click", () => {
    updater();
})
document.getElementById('logout').addEventListener("click", () => {
    logout();
})
document.getElementById('logOut').addEventListener("click", () => {
    logout();
})
//printer();