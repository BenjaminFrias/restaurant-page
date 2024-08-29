export { createHomepage };

function createHomepage() {
	const homepage = document.createElement("div");
	const title = document.createElement("h1");
	const description = document.createElement("p");
	const image = document.createElement("div");
	image.classList.add("image");

	title.textContent = "Savor the flavors of The Tasty Table";
	description.textContent =
		"Discover a culinary journey at The Tasty Table, where we bring you a symphony of tastes and aromas. Our menu features pasta. Whether you're craving soup or exploring new flavors, our expertly crafted dishes will delight your palate.";

	homepage.appendChild(title);
	homepage.appendChild(description);
	homepage.appendChild(image);
	homepage.setAttribute("id", "homepage");

	return homepage;
}
