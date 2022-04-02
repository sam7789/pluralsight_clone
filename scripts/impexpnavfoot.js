import footer from "../components/footer.js";
import searchpart from "../components/searchpart.js";
import { navigation, popuppart } from "../components/nav.js";

let navItems = document.getElementById('navItems');
navItems.innerHTML = popuppart()
let nav = document.getElementById('nav');
nav.innerHTML = navigation();
let searchBar = document.getElementById('searchBar');
searchBar.innerHTML = searchpart();


let footerdiv = document.getElementById('footer');
footerdiv.innerHTML = footer();
console.log(footer);


let username = localStorage.getItem("username");
console.log(username);

    if(username !== null){
      document.getElementById("signinbtn").innerHTML= username;
      console.log("user",username);
      document.getElementById("out").innerHTML="SIGN OUT";
      document.getElementById("out").addEventListener("click",function(){
          localStorage.removeItem("username");
          document.getElementById("signinbtn").innerHTML= "Sign in";
          document.getElementById("out").innerHTML="SIGN IN WITH";
      });

    }
    


    