// import { footer } from "../component.footer.js";
// let nav = document.getElementById("futter_main");
// nav.innerHTML = footer();

const redirect = () => {
	console.log(document.querySelector("#inspirations_select").value);
	window.location.href = document.querySelector("#inspirations_select").value;
};
