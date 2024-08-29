import { createHomepage } from "./homepage.js";
import { createAboutPage } from "./about.js";
import { createMenuPage } from "./menu.js";
import { contentSection } from "./index.js";

export function pageLoad(page) {
	switch (page) {
		case "homepage":
			contentSection.appendChild(createHomepage());
			break;
		case "menu":
			contentSection.appendChild(createMenuPage());
			break;
		case "about":
			contentSection.appendChild(createAboutPage());
			break;
	}
}
