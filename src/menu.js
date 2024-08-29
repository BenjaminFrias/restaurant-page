export { createMenuPage };

function createMenuPage() {
	const menuPage = document.createElement("div");
	const title = document.createElement("h1");
	const image = document.createElement("img");

	title.textContent = "Menu";

	// APPETIZERS LIST
	const appetizersTitle = document.createElement("h2");
	appetizersTitle.textContent = "Appetizers";
	const appetizersList = document.createElement("ul");
	appetizersList.appendChild(appetizersTitle);

	const appetizersItems = [
		["Affogato", 9],
		["Lemon Liqueur", 12],
		["Dessert Wine", 10],
		["Aged Port", 13],
	];

	appetizersItems.forEach(([item, price]) => {
		const appetizer = document.createElement("li");
		const itemTitle = document.createElement("p");
		itemTitle.textContent = item;

		const itemPrice = document.createElement("p");
		itemPrice.textContent = `$${price}`;

		appetizer.appendChild(itemTitle);
		appetizer.appendChild(itemPrice);
		appetizersList.appendChild(appetizer);
	});

	// MAIN COURSES
	const mainCoursesTitle = document.createElement("h2");
	mainCoursesTitle.textContent = "Main courses";
	const mainCoursesList = document.createElement("ul");
	appetizersList.appendChild(mainCoursesTitle);

	const mainCoursesItems = [
		["Classic burger", 9],
		["Grilled Cheese", 11],
		["Spaghetti and Meatballs", 14],
		["Chicken Tenders", 13],
	];

	mainCoursesItems.forEach(([item, price]) => {
		const courseItem = document.createElement("li");
		const itemTitle = document.createElement("p");
		itemTitle.textContent = item;

		const itemPrice = document.createElement("p");
		itemPrice.textContent = `$${price}`;

		courseItem.appendChild(itemTitle);
		courseItem.appendChild(itemPrice);
		mainCoursesList.appendChild(courseItem);
	});

	menuPage.appendChild(title);
	menuPage.appendChild(appetizersList);
	menuPage.appendChild(mainCoursesList);
	menuPage.setAttribute("id", "menu");

	return menuPage;
}
