let mouse = document.getElementById("k9");
let gabinete = document.getElementById("gabi");
let monitor = document.getElementById("ad");
let teclado = document.getElementById("ij");
let contamouse = 0;
let contagabinete =0;
let contamonitor = 0;
let contateclado =0;
let quantasmouse = 0;
let quantasgabinete =0;
let quantasmonitor = 0;
let quantasteclado =0;


mouse.onclick = function(){
   contamouse = contamouse + 55.80;
   b = contamouse.toFixed(2);
   quantasmouse = quantasmouse + 1;
}
gabinete.onclick = function(){
    contagabinete = contagabinete + 129.90;
    z = contagabinete.toFixed(2);
    quantasgabinete = quantasgabinete + 1;
}
monitor.onclick = function(){
    contamonitor = contamonitor + 859.90;
    l = contamonitor.toFixed(2);
    quantasmonitor = quantasmonitor + 1;
}
teclado.onclick = function(){
    contateclado = contateclado + 159.99;
    n = contateclado.toFixed(2);
    quantasteclado = quantasteclado + 1;
}