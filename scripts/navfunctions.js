let body = document.getElementById("mainBody");
let resobtn = document.getElementById("resobtn");
let navResources = document.getElementById("navResources");
let prodbtn = document.getElementById("prodbtn");
let navSkills = document.getElementById("navSkills");
let signinbtn = document.getElementById("signinbtn");
let navSignin = document.getElementById("navSignin");
let search = document.getElementById("img");
let searchItem = document.getElementById("searchItem");
let platform = document.getElementById("platform");
let platbtn = document.getElementById("platbtn");
let closeDiv = document.getElementById("p");
let displaysearch = document.getElementById("displaysearch");

// Platform Onclick Visibility Fuction
platbtn.onclick = function () {
  searchItem.style.display = "none";
  if (platform.style.display == "block") {
    platform.style.display = "none";
    platbtn.setAttribute("class", "popdown");

    navSkills.style.display = "none";
    prodbtn.setAttribute("class", "popdown");

    navSignin.style.display = "none";
    signinbtn.setAttribute("class", "popdown");

    navResources.style.display = "none";
    resobtn.setAttribute("class", "popdown");

    body.setAttribute("style", "overflow: auto;");
  } else {
    platform.style.display = "block";
    platbtn.setAttribute("class", "popup");

    navSkills.style.display = "none";
    prodbtn.setAttribute("class", "popdown");

    navSignin.style.display = "none";
    signinbtn.setAttribute("class", "popdown");

    navResources.style.display = "none";
    resobtn.setAttribute("class", "popdown");

    body.setAttribute("style", "overflow: hidden;");
  }
};

// Resource Onclick Visibility Fuction
resobtn.onclick = function () {
  searchItem.style.display = "none";
  if (navResources.style.display == "block") {
    navResources.style.display = "none";
    resobtn.setAttribute("class", "popdown");

    platform.style.display = "none";
    platbtn.setAttribute("class", "popdown");

    navSignin.style.display = "none";
    signinbtn.setAttribute("class", "popdown");

    navSkills.style.display = "none";
    prodbtn.setAttribute("class", "popdown");

    body.setAttribute("style", "overflow: auto;");
  } else {
    navResources.style.display = "block";
    resobtn.setAttribute("class", "popup");
    platform.style.display = "none";
    platbtn.setAttribute("class", "popdown");

    navSignin.style.display = "none";
    signinbtn.setAttribute("class", "popdown");

    navSkills.style.display = "none";
    prodbtn.setAttribute("class", "popdown");

    body.setAttribute("style", "overflow: hidden;");
  }
};

// Product Click Onclick Visibility part
prodbtn.onclick = function () {
  searchItem.style.display = "none";
  if (navSkills.style.display == "block") {
    navSkills.style.display = "none";
    prodbtn.setAttribute("class", "popdown");

    platform.style.display = "none";
    platbtn.setAttribute("class", "popdown");

    navSignin.style.display = "none";
    signinbtn.setAttribute("class", "popdown");

    navResources.style.display = "none";
    resobtn.setAttribute("class", "popdown");

    body.setAttribute("style", "overflow: auto;");
  } else {
    navSkills.style.display = "block";
    prodbtn.setAttribute("class", "popup");
    platform.style.display = "none";
    platbtn.setAttribute("class", "popdown");

    navSignin.style.display = "none";
    signinbtn.setAttribute("class", "popdown");

    navResources.style.display = "none";
    resobtn.setAttribute("class", "popdown");

    body.setAttribute("style", "overflow: hidden;");
  }
};

// Singup click Visibility Function
signinbtn.onclick = function () {
  searchItem.style.display = "none";
  if (navSignin.style.display == "block") {
    navSignin.style.display = "none";
    signinbtn.setAttribute("class", "popdown");
    platform.style.display = "none";
    platbtn.setAttribute("class", "popdown");

    navSkills.style.display = "none";
    prodbtn.setAttribute("class", "popdown");

    navResources.style.display = "none";
    resobtn.setAttribute("class", "popdown");

    body.setAttribute("style", "overflow: auto;");
  } else {
    navSignin.style.display = "block";
    signinbtn.setAttribute("class", "popup");

    platform.style.display = "none";
    platbtn.setAttribute("class", "popdown");

    navSkills.style.display = "none";
    prodbtn.setAttribute("class", "popdown");

    navResources.style.display = "none";
    resobtn.setAttribute("class", "popdown");

    body.setAttribute("style", "overflow: hidden;");
  }
};

// search click div visiblity function
searchItem.style.display = "none";
displaysearch.style.display = "none";
search.addEventListener("click", () => {
  navResources.style.display = "none";
  resobtn.setAttribute("class", "popdown");
  navSignin.style.display = "none";
  prodbtn.setAttribute("class", "popdown");
  platform.style.display = "none";
  platbtn.setAttribute("class", "popdown");
  navSkills.style.display = "none";
  signinbtn.setAttribute("class", "popdown");
  searchItem.style.display = "flex";
  displaysearch.style.display = "block";
});
// Search Div visibilty none function;
closeDiv.addEventListener("click", () => {
  searchItem.value = "";
  searchItem.style.display = "none";
  displaysearch.style.display = "none";
  displaysearch.innerHTML = "";
});
