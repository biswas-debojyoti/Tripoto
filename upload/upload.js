let showImg = (event) => {
	let img = document.getElementById("img_output");
	img.src = URL.createObjectURL(event.target.files[0]);
};

const publish = () => {
	let pl = document.querySelector("#photoLocation");
	let ut = document.querySelector("#u_ta");
	if (pl.value && ut.value) {
		alert("Photo added successfully");
	} else {
		alert("Missing field");
	}
};
