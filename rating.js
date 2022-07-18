let brData = {};
function cookieData() {
  document.cookie.split("; ").forEach((element) => {
    var word = element.split("=");
    brData[word[0]] = word[1];
  });
}
cookieData();
if (brData.user_name == null) {
  window.alert("Logged out");
  window.location.replace("./index.html");
}

function logout() {
  document.cookie = "phone=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = "user_name=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = "pic=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  document.cookie = "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  window.location.replace("./index.html");
}

function fill_temp() {
  var data = {
    list: [
      {
        name: "cipherGUYS",
        frameurl: "https://cipherguys.github.io",
        url: "https://cipherguys.github.io",
      },
      {
        name: "Tomin Joy",
        frameurl: "https://tomin-joy.github.io",
        url: "https://tomin-joy.github.io",
      },
      {
        name: "Akash Vijay",
        frameurl: "https://akashvijay.live/",
        url: "https://akashvijay.live/",
      },
      {
        name: "Mathews P Mathew",
        frameurl: "https://mathewspmathew.github.io/mathewspmathew/",
        url: "https://mathewspmathew.github.io/mathewspmathew/",
      },
      {
        name: "Reenphy George",
        frameurl: "https://reenphygeorge.github.io/portfolio/",
        url: "https://reenphygeorge.github.io/portfolio/",
      },
      {
        name: "Dona Siby ",
        frameurl: "https://donasiby.github.io/MyWebsite/",
        url: "https://donasiby.github.io/MyWebsite/",
      },
      {
        name: "Rese Raju",
        frameurl: "https://reseraju.github.io/new-portfolio/",
        url: "https://reseraju.github.io/new-portfolio/",
      },
      {
        name: "Bibin Biju",
        frameurl: "https://bibinbiju111.github.io/Portfolio_Demo/",
        url: "https://bibinbiju111.github.io/Portfolio_Demo/",
      },
      {
        name: "Jimmy Jose",
        frameurl: "https://jimmyj13.github.io/Jimmy-portfolio/",
        url: "https://jimmyj13.github.io/Jimmy-portfolio/",
      },
      {
        name: "Nikhil Jose",
        frameurl: " https://nikhiljose-123.github.io/Portfolio/",
        url: " https://nikhiljose-123.github.io/Portfolio/",
      },
      {
        name: "Jithin Jerome ",
        frameurl: "https://jithinjerome.github.io/Portfolio/",
        url: "https://jithinjerome.github.io/Portfolio/",
      },
      {
        name: "Aadit ",
        frameurl: "https://aadit-10.github.io/Web/",
        url: "https://aadit-10.github.io/Web/",
      },
      {
        name: "Lloyd Sibi",
        frameurl: "https://lloydsibi.github.io/Portfolio1/",
        url: "https://lloydsibi.github.io/Portfolio1/",
      },
      {
        name: "Johns Raju ",
        frameurl: "https://johnsraju.github.io/Portfolio_JOHNS/",
        url: "https://johnsraju.github.io/Portfolio_JOHNS/",
      },
      {
        name: "Leon Jose Mathew",
        frameurl: "https://leon-jose-mathew.github.io/portfolio/",
        url: "https://leon-jose-mathew.github.io/portfolio/",
      },
      {
        name: "Jose K James ",
        frameurl: "https://cyberianzed.github.io/cyberianweb/",
        url: "https://cyberianzed.github.io/cyberianweb/",
      },
      {
        name: "Priya Babu ",
        frameurl: "https://priyababu07.github.io/CV-1/",
        url: "https://priyababu07.github.io/CV-1/",
      },
      {
        name: "Rahul Babu",
        frameurl: "https://rahulbabu7.github.io/Portfolio/",
        url: "https://rahulbabu7.github.io/Portfolio/",
      },
      {
        name: "Alvin varghese ",
        frameurl: "https://alvinhub2002.github.io/portfolio/#",
        url: "https://alvinhub2002.github.io/portfolio/#",
      },
      {
        name: "Adwaith M ",
        frameurl: "https://adwaith003.github.io/Web/",
        url: "https://adwaith003.github.io/Web/",
      },
      {
        name: "Justin Jolly ",
        frameurl: "https://justinjolly.github.io/web/",
        url: "https://justinjolly.github.io/web/",
      },
      {
        name: "KARUN CHERY JAMES ",
        frameurl: "https://karuncj.github.io/Portfolio/",
        url: "https://karuncj.github.io/Portfolio/",
      },
      {
        name: "Anandukrishna VR",
        frameurl: "https://anandu2357.github.io/webdev/",
        url: "https://anandu2357.github.io/webdev/",
      },
      {
        name: "Jibbin Jacob Daniel ",
        frameurl: "https://jibbinjacob.github.io/portfolio/",
        url: "https://jibbinjacob.github.io/portfolio/",
      },
      {
        name: "Bibin Benny",
        frameurl: "https://bibin2024.github.io/Bibin-Portfolio/",
        url: "https://bibin2024.github.io/Bibin-Portfolio/",
      },
      {
        name: "Amal B Palackal ",
        frameurl: "https://amal1231.github.io/web-dev-csea-site/",
        url: "https://amal1231.github.io/web-dev-csea-site/",
      },
      {
        name: "Megha Rajesh ",
        frameurl: "https://megharajesh.github.io/html/",
        url: "https://megharajesh.github.io/html/",
      },
      {
        name: "Ajai Sankar Hareesh ",
        frameurl: "https://ajaisankar.github.io/Portfolio/",
        url: "https://ajaisankar.github.io/Portfolio/",
      },
      {
        name: "Saranya S Nair",
        frameurl: "https://saranya2909.github.io/web-dev-csea-/",
        url: "https://saranya2909.github.io/web-dev-csea-/",
      },
      {
        name: "Gautam Krishna ",
        frameurl: "https://gautham248.github.io/",
        url: "https://gautham248.github.io/",
      },
      {
        name: "Juna Teres Martin ",
        frameurl: "https://junateresmartin.github.io/Portfolio_temp/",
        url: "https://junateresmartin.github.io/Portfolio_temp/",
      },
      {
        name: "Anitta Siby ",
        frameurl: "https://tinkerness.github.io/webdev-sampleportfolio/",
        url: "https://tinkerness.github.io/webdev-sampleportfolio/",
      },
      {
        name: "Ashik David Roy ",
        frameurl: "https://ashikdavidroy.github.io/MyportfolioWebsite/",
        url: "https://ashikdavidroy.github.io/MyportfolioWebsite/",
      },
      {
        name: "Sweety Sonny ",
        frameurl: "https://sweety0503.github.io/sweety-csea-site/",
        url: "https://sweety0503.github.io/sweety-csea-site/",
      },
      {
        name: "Allwina Anna Soy Jose",
        frameurl: "https://allwina.github.io/allwinasoy.github.io/",
        url: "https://allwina.github.io/allwinasoy.github.io/",
      },
      {
        name: "Melissa Manoj Thondoli",
        frameurl: "https://melissa2001.github.io/portfolio/",
        url: "https://melissa2001.github.io/portfolio/",
      },
      {
        name: "Sona Joseph",
        frameurl: "https://sonajoseph-57.github.io/Portfolio/",
        url: "https://sonajoseph-57.github.io/Portfolio/",
      },
      {
        name: "Nimitha Joy",
        frameurl: "https://ark-20.github.io/Portfolio/",
        url: "https://ark-20.github.io/Portfolio/",
      },
      {
        name: "Dony Tomy ",
        frameurl: "https://donytomy.github.io/Dony/",
        url: "https://donytomy.github.io/Dony/",
      },
      {
        name: "Afna Ayshu Jaffin",
        frameurl: "https://afnaayshu.github.io/Web-/",
        url: "https://afnaayshu.github.io/Web-/",
      },
      {
        name: "Ajo Thomas ",
        frameurl: "https://ajothomas07.github.io/Portfolio/",
        url: "https://ajothomas07.github.io/Portfolio/",
      },
      {
        name: "Rithika Anilkumar",
        frameurl: " https://rithika-anilkumar.github.io/Portfolio-/",
        url: " https://rithika-anilkumar.github.io/Portfolio-/",
      },
      {
        name: "Anu Mathew ",
        frameurl: "https://anumathew-25.github.io/web-dev-csea/",
        url: "https://anumathew-25.github.io/web-dev-csea/",
      },
      {
        name: "Navya Saju ",
        frameurl: "https://navya-1231.github.io/WEB_DEV_CSE/",
        url: "https://navya-1231.github.io/WEB_DEV_CSE/",
      },
      {
        name: "V S Nikhil Maheswar",
        frameurl: "vsnikhilmaheswar.github.io",
        url: "vsnikhilmaheswar.github.io",
      },
      {
        name: "Rinta Maria Raju",
        frameurl: "https://Rinta-Maria.github.io/portfolio",
        url: "https://Rinta-Maria.github.io/portfolio",
      },
      {
        name: "Sara Babu ",
        frameurl: "https://sarababu002.github.io/web-dev-/",
        url: "https://sarababu002.github.io/web-dev-/",
      },
      {
        name: "Bibin Jose",
        frameurl: "https://bibs23.github.io/",
        url: "https://bibs23.github.io/",
      },
      {
        name: "Swathilekshmi S ",
        frameurl: "https://swathilekshmi.github.io/me/",
        url: "https://swathilekshmi.github.io/me/",
      },
      {
        name: "Aravind Binu",
        frameurl: "https://aravindbinu.github.io",
        url: "https://aravindbinu.github.io",
      },
      {
        name: "Ajay Johny ",
        frameurl: "https://ajayjohny-2002.github.io/PersonalPortfolio2/",
        url: "https://ajayjohny-2002.github.io/PersonalPortfolio2/",
      },
      {
        name: "Delna K Jose",
        frameurl: "https://delnakjose.github.io/MY-PAGE/",
        url: "https://delnakjose.github.io/MY-PAGE/",
      },
      {
        name: "Shalon Mary Michael",
        frameurl: "https://shalonmichael.github.io/",
        url: "https://shalonmichael.github.io/",
      },
      {
        name: "Taniya Thomas ",
        frameurl: "https://taniy-a.github.io/web-dev/",
        url: "https://taniy-a.github.io/web-dev/",
      },
      {
        name: "Sreelakshmi S",
        frameurl: "https://sreelakshmi-01.github.io/My_Page/",
        url: "https://sreelakshmi-01.github.io/My_Page/",
      },
      {
        name: "Anandu Unnikrishnan",
        frameurl: "https://anandu-unnikrishnan.github.io/Portfolio/#",
        url: "https://anandu-unnikrishnan.github.io/Portfolio/#",
      },
      {
        name: "ashly",
        frameurl: "https://ashly0115.github.io/PortFolio/",
        url: "https://ashly0115.github.io/PortFolio/",
      },
      {
        name: "Treesa Joseph",
        frameurl: "https://treesa-19.github.io/Portfolio/",
        url: "https://treesa-19.github.io/Portfolio/",
      },
      {
        name: "Lakshmi Suresh",
        frameurl: "https://lakshmiisuresh.github.io/web-portfolio/",
        url: "https://lakshmiisuresh.github.io/web-portfolio/",
      },
      {
        name: "Manjusree Raveendran",
        frameurl: " https://manjuraveendran.github.io/portfolio/",
        url: " https://manjuraveendran.github.io/portfolio/",
      },
      {
        name: "Emy Joshy",
        frameurl: "https://emyjoshy.github.io/webdev-portfolio/",
        url: "https://emyjoshy.github.io/webdev-portfolio/",
      },
      {
        name: "Abhishek CA",
        frameurl: "https://abhi30000.github.io/websiteMine/",
        url: "https://abhi30000.github.io/websiteMine/",
      },
      {
        name: "JOSEPH JACOB",
        frameurl: "https://joseph-jacob.github.io/personalPortfolio/",
        url: "https://joseph-jacob.github.io/personalPortfolio/",
      },
      {
        name: "Christi Joseph",
        frameurl: "https://chrstijp.github.io/webdevworkshop/",
        url: "https://chrstijp.github.io/webdevworkshop/",
      },
      {
        name: "Alan Mathew Tom",
        frameurl: "https://alan547.github.io/portfolio2/",
        url: "https://alan547.github.io/portfolio2/",
      },
      {
        name: "Ann Rosa Binu",
        frameurl: "https://annrosabinu.github.io/myself/",
        url: "https://annrosabinu.github.io/myself/",
      },
      {
        name: "Vivekanand R",
        frameurl: "https://vivek-unni.github.io/Portfolio1stTry/",
        url: "https://vivek-unni.github.io/Portfolio1stTry/",
      },
    ],
  };
  var template = Handlebars.compile(
    document.querySelector("#template").innerHTML
  );
  var filled = template(data);
  document.querySelector("#output").innerHTML = filled;
}

document.getElementById("logout").addEventListener("click", () => {
  logout();
});
document.getElementById("logOut").addEventListener("click", () => {
  logout();
});
