let brData = {};
function cookieData() {
    document.cookie.split('; ').forEach(element => {
        var word = element.split('=');
        brData[word[0]] = word[1];
    });
}
cookieData();
if (brData.user_name==null) {
    window.alert("Logged out");
    window.location.replace("./index.html");
}

function logout() {
    document.cookie = 'phone=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'user_name=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'pic=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.replace('./index.html');
}

function fill_temp() {
    var data = {
        list: [{
            name: "cipherGUYS",
            frameurl: "https://cipherguys.github.io",
            url: "https://cipherguys.github.io"
        },
        {
            name: "Tomin Joy",
            frameurl: "https://tomin-joy.github.io",
            url: "https://tomin-joy.github.io"
        },
        {
            name: "Akash Vijay",
            frameurl: "https://akashvijay.live/",
            url: "https://akashvijay.live/"
        },
        {
            name: "Mathews P Mathew",
            frameurl: "https://mathewspmathew.github.io/mathewspmathew/",
            url: "https://mathewspmathew.github.io/mathewspmathew/"
        },
        {
            name: "Reenphy George",
            frameurl: "https://reenphygeorge.github.io/portfolio/",
            url: "https://reenphygeorge.github.io/portfolio/"
        }
        ]
    }
    var template = Handlebars.compile(document.querySelector("#template").innerHTML);
    var filled = template(data);
    document.querySelector("#output").innerHTML = filled;
}

document.getElementById('logout').addEventListener("click", () => {
    logout();
})
document.getElementById('logOut').addEventListener("click", () => {
    logout();
})