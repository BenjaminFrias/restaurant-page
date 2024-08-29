import { createHomepage } from "./homepage.js";
import { createMenuPage } from "./menu.js";
import { contentSection } from "./index.js";

export function pageLoad() {
	contentSection.appendChild(createMenuPage());
}
