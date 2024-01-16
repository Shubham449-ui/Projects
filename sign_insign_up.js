let signup = document.getElementById("signup");
let signin = document.getElementById("signin");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signin.onclick = function()
{
    namefield.style.maxHeight= "0";
    title.innerHTML = "Sign In";
    signin.style.background="#3c00a0";
    signin.style.color = "white";
    signup.style.background="darkgrey";
    signup.style.color = "black";
    
}
signup.onclick = function()
{
    namefield.style.maxHeight= "70"+"px";
    title.innerHTML = "Sign Up";
    signup.style.background="#3c00a0";
    signup.style.color = "white";
    signin.style.background="darkgrey";
    signin.style.color = "black";
}
