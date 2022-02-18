var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function(){
    body.className = "sign-in-js"

});

btnSignup.addEventListener("click", function(){
    body.className = "sign-up-js"
});

var senha = document.getElementsByClassName("senha")[0];
var olho = document.getElementsByClassName("olho")[0]
var senha1 = document.getElementsByClassName("senha")[1];
var olho1 = document.getElementsByClassName("olho")[1]

olho.addEventListener('click', function(){
    senha.type = senha.type == 'text' ? 'password' : 'text';
});

olho1.addEventListener('click', function(){
    senha1.type = senha1.type == 'text' ? 'password' : 'text';
})
