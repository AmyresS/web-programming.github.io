	var img1 = "images/War/original.jpg"
	var img2 = "images/War/20ce79ee10fdfa7_800x500.jpg"
	var img3 = "images/War/rosijski-vijska-naroshhennya-zs-rf-ar-sichen-2022.jpg"
	var which_img = 2;
	function prev() {
		switch (which_img) {
			case 1:
				which_img = 3;
				document.getElementById("slider-left").src = img2;
				document.getElementById("slider-center").src = img3;
				document.getElementById("slider-right").src = img1;
			break;
			case 2:
				which_img = 1;
				document.getElementById("slider-left").src = img3;
				document.getElementById("slider-center").src = img1;
				document.getElementById("slider-right").src = img2;
			break;
			case 3:
				which_img = 2;
				document.getElementById("slider-left").src = img1;
				document.getElementById("slider-center").src = img2;
				document.getElementById("slider-right").src = img3;
			break;
		}
	}
	function next() {
		switch (which_img) {
			case 1:
				which_img = 2;
				document.getElementById("slider-left").src = img1;
				document.getElementById("slider-center").src = img2;
				document.getElementById("slider-right").src = img3;
			break;
			case 2:
				which_img = 3;
				document.getElementById("slider-left").src = img2;
				document.getElementById("slider-center").src = img3;
				document.getElementById("slider-right").src = img1;
			break;
			case 3:
				which_img = 1;
				document.getElementById("slider-left").src = img3;
				document.getElementById("slider-center").src = img1;
				document.getElementById("slider-right").src = img2;
			break;
		}
	}
