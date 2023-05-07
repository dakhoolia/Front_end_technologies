/*

using JS vanilla

-You need to have 5 rows of unique data (the data cannot be the same in each row).
-Populate the table with data of your choice that is relevant to the table headers.
-The Table needs to be populated from the 'table.js' file
-Icons should be used for the icon columns, any icons can be used but
no images are allowed. (You can use bootstrap icons)✅

The following functionality needs to be implemented in the ‘table.js’ file,
using jQuery:

-When one of the images in the Table is clicked,
the image must be displayed in a new window or tab in your web browser.
-The table’s odd rows need to change font color
when the mouse hovers over them,
changing font color back to black once the mouse stops hovering over them.
✅
*/

/* ========== my comments =======================
I liked your solution!
Since it should be personal stuff, why don't use favorite music, movies, books, etc?!
So I change only favorites for you, but you decide what to
just that:
1) you don't need to use : let log = console.log;
 always use console.log() instead.
2) you don't need to use here: const header = table.getElementsByTagName("thead");
remember to delete unused variables.


const favorites = [
	{
		id: "1",
		icon: "bi bi-file-music",
		desc: "My favorite song: by Bruce Springsteen",
		info: "Streests of Philadelphia",
		img: "https://upload.wikimedia.org/wikipedia/en/c/c2/Streets_of_Philadelphia.jpg",
	},
	{
		id: "2",
		icon: "bi bi-book",
		desc: "Ny favorite book: by George Saunders",
		info: "Lincoln in the Bardo",
		img: "https://upload.wikimedia.org/wikipedia/en/b/b5/Lincoln_in_the_Bardo_by_George_Saunders_first_edition.jpg",
	},
	{
		id: "3",
		icon: "bi bi-airplane-engines",
		desc: "My favorite destination: Island",
		info: "Best hot springs and geothermal pools",
		img: "../stock_photos/pexels-jeremy-bishop-2524873.jpg",
	},
	{
		id: "4",
		icon: "bi bi-egg-fried",
		desc: "My favorite food: Sushi",
		info: "Makizushi",
		img: "../stock_photos/sushi.jpg",
	},
	{
		id: "5",
		icon: "bi bi-braces",
		desc: "My favorite programing language: JavaScript",
		info: "Because of tables:)",
		img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png",
	},
];

document.addEventListener("DOMContentLoaded", function () {
	loadFavorites(favorites);
});

function loadFavorites(favorites) {
	const table = document.getElementById("personalTable");
	const tbody = table.lastElementChild;
	let dataHtml = "";

	for (let favorite of favorites) {
		let iconHtml = favorite.icon ? `<i class="${favorite.icon}"></i>` : "";
		let imgHtml = favorite.img
			? `<img onclick="openNewTab('${favorite.img}')" height="50px" width="100px" src="${favorite.img}" alt="${favorite.desc}"></img>`
			: "";

		dataHtml += `<tr class='tRow'>
        <td>${favorite.id}</td>
        <td>${iconHtml}</td>
        <td>${favorite.desc}</td>
        <td>${favorite.info}</td>
        <td>${imgHtml}</td>
        </tr>`;
	}
	tbody.innerHTML = dataHtml;
}

function openNewTab(imgUrl) {
	window.open(imgUrl, "_blank", "width=640,height=480");
}

$(document).ready(function () {
	$("tbody tr:nth-child(odd)").hover(mouseEnter, mouseLeave);
	function mouseEnter() {
		$(this).css("color", "red");
	}

	function mouseLeave() {
		$(this).css("color", "black");
	}
});
================================================= */
let log = console.log;

// elements grabbed from the DOM
const table = document.getElementById("personalTable");
const header = table.getElementsByTagName("thead");

// creating elements
let countries = [
	{
		id: "UK",
		icon: "bi bi-cup-hot",
		desc: "United Kingdom",
		info: "European",
		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
	},
	{
		id: "NO",
		icon: "bi bi-tree-fill",
		desc: "Norway",
		info: "European",
		img: "https://cdn.britannica.com/01/3101-004-506325BB/Flag-Norway.jpg",
	},
	{
		id: "IR",
		icon: "bi bi-arrow-left-right",
		desc: "Iran",
		info: "Asian",
		img: "https://cdn.britannica.com/22/1722-004-EAD033D8/Flag-Iran.jpg",
	},
	{
		id: "ERI",
		icon: "bi bi-images",
		desc: "Eritrea",
		info: "African",
		img: "https://cdn.britannica.com/09/09-004-63D8C33D/Flag-Eritrea.jpg",
	},
	{
		id: "US",
		icon: "bi bi-currency-dollar",
		desc: "United states",
		info: "North-American",
		img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
	},
];

document.addEventListener("DOMContentLoaded", function () {
	loadCountries(countries);
});

function loadCountries(countries) {
	const tbody = table.lastElementChild;
	let dataHtml = "";

	for (let country of countries) {
		let iconHtml = country.icon ? `<i class="${country.icon}"></i>` : "";
		let imgHtml = country.img
			? `<img onclick="newTab('${country.img}')" height="50px" width="100px" src="${country.img}" alt="${country.desc}"></img>`
			: "";

		dataHtml += `<tr class='tRow'>
        <td>${country.id}</td>
        <td>${iconHtml}</td>
        <td>${country.desc}</td>
        <td>${country.info}</td>
        <td>${imgHtml}</td>
        </tr>`;
	}
	tbody.innerHTML = dataHtml;
}

function newTab(imgUrl) {
	// image already has https:// included
	//let filePath = 'https://';
	window.open(imgUrl, "_blank", "width=640,height=480");
}

$(document).ready(function () {
	$("tbody tr:nth-child(odd)").hover(mouseEnter, mouseLeave);
	function mouseEnter() {
		$(this).css("color", "red");
	}

	function mouseLeave() {
		$(this).css("color", "black");
	}
});

