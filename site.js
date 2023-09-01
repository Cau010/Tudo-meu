//declaramos como document.getElementById para chamar o que foi feito 
let loginBtn = document.getElementById("login-link");
let modal = document.getElementById("login-modal");
let senha = document.getElementById("olho");
let pass = document.getElementById("password");

senha.onclick = function(){
    function pass(obj){
        obj
    }
}


//abrir o login quando for clicado 
loginBtn.onclick = function() {
	modal.style.display = "block";
}


        //Quando clicar no X vai fechar a janela
let closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
	modal.style.display = "none";
}
//Se clicar fora vai fechar a janela
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
    }