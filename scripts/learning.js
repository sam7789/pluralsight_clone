var arr =[];
var course = JSON.parse(localStorage.getItem("course"));

arr.push(course);
content(arr);

console.log(course.table[5]);

//table(course.table);


function content(course){
  course.forEach(function(elem){
        
        let rate = document.querySelector("#rate");
        let level = document.querySelector("#level");
        let time = document.querySelector("#time");
        let titel=document.querySelector("#titel");
        let shortd = document.querySelector("#sd");
        let div= document.querySelector("#auth");
        let div6=document.querySelector("#learn");
        let div5=document.querySelector("#see");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        div2.setAttribute("id","i2");
        
        let div4 = document.createElement("div");
        div4.setAttribute("id","d2");
        
        let div3 = document.createElement("div");
        div3.setAttribute("id","i3");
        
        rate.textContent=`(${elem.rating})`;
        rate.style.marginTop="5px";
        rate.style.fontSize="19px"
        time.textContent=elem.time;
        level.textContent=elem.level;
        titel.textContent=elem.title;
        shortd.textContent=elem.shortDiscription;
        
        let p2 = document.createElement("p");
        p2.setAttribute("id","f2");
        p2.textContent=elem.by;
        p2.style.fontSize="18px";
        p2.style.marginLeft="31px";
        p2.style.marginTop ="12px";

        let p4 = document.createElement("p");
       
        p4.textContent="What you'll learn";
        p4.style.fontSize="29px";
        p4.style.marginTop ="12px";

        let p6 = document.createElement("p");
       
        p6.textContent= elem.discription;
        p6.style.fontSize="21px";
        p6.style.marginTop ="35px";
        p6.style.color="#ccc9c7";
        
        let p3 = document.createElement("p");
        p3.setAttribute("id","f3");
        p3.textContent=elem.author_about;
        p3.style.color="#ccc9c7";
        let p1 = document.createElement("p");
        p1.setAttribute("id","f1");
        p1.textContent="About the author";
        p1.style.fontSize="26px"
        
        let p5 = document.createElement("h4");
        p5.textContent=`See more courses by ${elem.by} >`;
        p5.style.color="white";
        
        
        
        let img = document.createElement("img");
        img.src = elem.Author_Image_URL;
        

        div6.style.marginTop="36px";
        div6.append(p4,p6);
        div5.append(p5);
        div3.append(img);
        div2.append(div3,p2);
        div4.append(p3);
        
        div1.append(p1);
        div.append(div1,div2,div4);
        
    });

}



// function table(user){
//   user.map(function(elem){
    
//   let div = document.querySelector("#cors");

//   let div1=document.createElement("div");
//   let p = document.createElement("p");
//   p.textContent=elem.val;

//   div1.setAttribute("id","t1");

//   div1.append(p);
//   div.append(div1);

//   });
// }
let count = 0;
document.querySelector("#set").addEventListener("click",function(){
  count++;

  if(count%2==0){
    var x = document.getElementById("cors");
     x.style.display="none";
  }else{
     x = document.getElementById("cors");
    x.style.display="block";
  }
 
  
});