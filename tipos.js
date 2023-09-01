let fun = document.getElementById("fundo");

function random(number) {
  return (number =0);
}

fun.onclick =function () {
	let texto =
    "rgb(" + (214) + "," + (255) + "," + (255) + ")";
  let sla =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = sla;
document.body.style.backgroundColor.A2 = texto;
};





// 
// 
// 
// 

function ampliarImagem(img) {
	let ampliadaContainer = document.querySelector(".ampliada-container");
	let imgAmpliada = document.querySelector(".ampliada-image");
	imgAmpliada.src = img.src;
	ampliadaContainer.style.display = "flex";
	setTimeout(function() {
		ampliadaContainer.classList.add("visivel");
	}, 50);
}

document.querySelector(".ampliada-container").addEventListener("click", function() {
	this.classList.remove("visivel");
	setTimeout(function() {
		document.querySelector(".ampliada-container").style.display = "none";
	}, 50);
});






