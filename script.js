var h2=document.createElement("h2");
h2.style.textAlign="center";
h2.style.marginTop="20px";
h2.innerHTML="COVID-19 API";
h2.style.color="green";
document.body.append(h2);

var div=document.createElement("div");
div.style.textAlign="center";

var input=document.createElement("input");
input.style.backgroundColor="skyblue";
input.style.marginTop="20px";
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.style.marginTop="1px";
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="5px";
button.addEventListener("click",foo);

let Active=document.createElement("div");
Active.setAttribute("id","Active");
Active.style.marginTop="20px";
Active.style.color="orange";

let Deaths=document.createElement("div");
Deaths.setAttribute("id","Deaths");
Deaths.style.color="orange";


let Recovered=document.createElement("div");
Recovered.setAttribute("id","Recovered");
Recovered.style.color="orange";


div.append(input,button,Active,Deaths,Recovered);
document.body.append(div);


async function foo(){
let res=document.getElementById("country").value;
console.log(res);
let url=`https://api.covid19api.com/total/dayone/country/${res}`;
let res1=await fetch(url);
let res2=await res1.json();
let index=res2.length-1;
console.log(res2[index]);
console.log(res2[index].Active);
Active.innerHTML=`Total Active cases:${res2[index].Active}`;

Deaths.innerHTML=`Total Deaths:${res2[index].Deaths}`;

Recovered.innerHTML=`Total Recovered cases:${res2[index].Recovered}`;
}