const user1 = {
    email: "alexe@hacker",
    pass: "hakvam"
}
const user2 = {
    email: "kevin@hacker",
    pass: "kevin"
}
const logIn = document.getElementById("LogIn");
const hackPanel = document.getElementById("listGames");
let username = document.getElementById("username");
let password = document.getElementById("password");
let div = document.createElement("div");
let img = document.createElement("img");
let h3 = document.createElement("h3");
let neverForget = document.createElement("h3");
neverForget.textContent = "Не го забравяй!";
h3.textContent="Бебе нали знаеш, че много те обичам!";
let h4 = document.createElement("h4");
h4.textContent="❤️!\n081711070207=∞"
div.id = "giff-container";
img.id = "giff";
img.src="images/i-love-you.gif";
const aNewBodyElement = document.createElement("body");
aNewBodyElement.id = "newBodyElement";

logIn.addEventListener("click", ()=>{
    if(username.value==user1.email&&password.value==user1.pass||username.value==user2.email&&password.value==user2.pass){
        document.body.innerHTML="";
        document.body = aNewBodyElement;
        aNewBodyElement.style="backround-color: white;";
        aNewBodyElement.appendChild(h3);
        div.appendChild(img);
        aNewBodyElement.appendChild(div);
        aNewBodyElement.appendChild(neverForget);
        aNewBodyElement.appendChild(h4);
    }else{
        username.value="";
        password.value="";
        username.style="box-sizing: border-box; border: 0.5px solid red; border-radius: 6px;"
        password.style="box-sizing: border-box; border: 0.5px solid red; border-radius: 6px;"
    }
});
function giveAlert(){
    alert("Sorry PREMIUM users only and they are limited.\n:)");
}