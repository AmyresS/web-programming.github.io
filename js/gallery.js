var fsblock = document.getElementById("fullscreen-block");
var fsimg = document.getElementById("fullscreen-img");
var fstext = document.getElementById("fullscreen-text");

document.addEventListener("click", function(e){
	const target = e.target.closest(".image img");
	const outoftarget = e.target.closest("#fullscreen-block");

	if(target){
		fsblock.hidden = false;
  		fsimg.src = target.getAttribute("src").valueOf();
  		fstext.innerHTML = target.getAttribute("alt").valueOf();
	}
	else if(outoftarget){
		fsblock.hidden = true;
	} 
});