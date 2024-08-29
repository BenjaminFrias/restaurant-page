export { createAboutPage };

function createAboutPage() {
	const aboutPage = document.createElement("div");
	const title = document.createElement("h1");
	const quote = document.createElement("h2");
	const description = document.createElement("p");
	const image = document.createElement("img");

	title.textContent = "About";
	quote.textContent = "Where Delicious Meets Comfort";
	description.innerHTML = `
    The Tasty Table, we're passionate about creating unforgettable dining experiences.
    Our menu features a delightful fusion of flavors, inspired by global cuisines and
    prepared with fresh, high-quality ingredients.
    <br><br>
    Whether you're craving a hearty breakfast, a light lunch, or a sumptuous dinner,
    our menu has something to satisfy
    every palate. From classic comfort foods to innovative culinary creations, each dish
    is crafted with care and attention to detail.
    <br><br>
    Join us for a culinary journey an
    discover the true meaning of deliciousness.
    `;

	aboutPage.appendChild(title);
	aboutPage.appendChild(quote);
	aboutPage.appendChild(description);
	aboutPage.setAttribute("id", "homepage");

	return aboutPage;
}
