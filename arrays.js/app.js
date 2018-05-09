let colors = [
"red",
"yellow",
"blue",
"pink",
"purple",
"orange",
"gray",
"green",
];
const container = document.querySelector(".container");
colors.forEach(function(item){
	const elem = document.createElement("div");
	elem.style.background = item;

	elem.innerHTML = item;			 
	const container = document.querySelector(".container");
	container.appendChild(elem);
})

const button = document.querySelector(".add-color");


button.onclick = function(e) {
	const input = document.getElementById("color");

	let color = input.value;

	const elem = document.createElement("div");
	elem.style.background = color;
	elem.innerHTML = color;
	container.appendChild(elem);
}
