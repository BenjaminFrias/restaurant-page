import { pageLoad } from "./pageLoad";
import "./style.css";
export const contentSection = document.querySelector("#content");

const homepageBtn = document.querySelector("#homepage");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

document.querySelectorAll("header nav button").forEach((btn) => {
	btn.addEventListener("click", tabSwitching);
});

pageLoad("homepage");

function tabSwitching(event) {
	// Wipe previous page
	contentSection.innerHTML = "";

	// Load page
	const page = event.target.id;
	pageLoad(page);
}
