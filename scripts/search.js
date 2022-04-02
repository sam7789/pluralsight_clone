
async function search(){
    try {
        let key = document.getElementById("searchInput").value;

        let api = `https://pluralsightfw15.herokuapp.com/course/search/${key}`;

        let res = await fetch(api);
        let data = await res.json();
        // console.log(data);
        return(data);
    } catch (e) {
        console.log(e);
    }
}

async function main(){
    let data = await search();
    if(data == undefined){
        document.getElementById("displaysearch").innerHTML = null;
        return false;
    }
    let username = localStorage.getItem("username");
    if(data !== undefined && username !== null){
        displayData(data);
    }
    else{
        document.getElementById("displaysearch").innerHTML = "";
        let div = document.createElement('div');
        div.setAttribute("id","noncourse");
        div.innerHTML="Sign in First";
        document.getElementById("displaysearch").append(div);
        document.getElementById("displaysearch").addEventListener("click",()=>{
            window.location.href = "signin.html"
        })
    }
    //displayData(data);
}


// else{
//     let title1 = document.createElement("p");
//     title1.textContent="Sign in first";
//     div.append(title1);
// }

function displayData(data){
    // console.log(data);
    document.getElementById("displaysearch").innerHTML = "";
    let div = document.createElement('div');
    div.setAttribute("id","coursediv");

    data.forEach(element => {
        let title = document.createElement("p");
        title.setAttribute("style","cursor:pointer");
        title.innerText = element.title;

        title.onclick = ()=>{
             localStorage.setItem("course", JSON.stringify(element));
             location.href = "learning.html";
           
        }
       
        div.append(title);

    });
    document.getElementById("displaysearch").append(div);
}

let timerId;

function debounce(func, delay){
    if(timerId){
        clearTimeout(timerId);
    }
    timerId = setTimeout(()=>{
        func();
    },delay);
}


