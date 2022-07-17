function fill_temp() {
    var data = {
        list: [{
            name: "cipherGUYS",
            frameurl: "https://cipherguys.github.io",
            url: "https://cipherguys.github.io"
        }, {
            name: "Handlebars",
            frameurl: "https://handlebarsjs.com/",
            url: "https://handlebarsjs.com/"
        },
        {
            name:"Tomin",
            frameurl:"https://tomin-joy.github.io",
            url:"https://tomin-joy.github.io"
        }
        ]
    }
    var template = Handlebars.compile(document.querySelector("#template").innerHTML);
    var filled = template(data);
    document.querySelector("#output").innerHTML = filled;
}