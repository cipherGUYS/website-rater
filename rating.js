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
            name: "Vivekanand R",
            frameurl: "https://vivek-unni.github.io/Portfolio1stTry/",
            url: "https://vivek-unni.github.io/Portfolio1stTry/"
        },
        {
            name: "Bibin Biju",
            frameurl: "https://bibinbiju111.github.io/Portfolio_Demo/",
            url: "https://bibinbiju111.github.io/Portfolio_Demo/"
        },
        {
            name: "Jimmy Jose",
            frameurl: "https://jimmyj13.github.io/Jimmy-portfolio/",
            url: "https://jimmyj13.github.io/Jimmy-portfolio/"
        },
        {
            name: "Nikhil Jose",
            frameurl: "https://nikhiljose-123.github.io/Portfolio/",
            url: "https://nikhiljose-123.github.io/Portfolio/"
        }
        ]
    }
    var template = Handlebars.compile(document.querySelector("#template").innerHTML);
    var filled = template(data);
    document.querySelector("#output").innerHTML = filled;
}