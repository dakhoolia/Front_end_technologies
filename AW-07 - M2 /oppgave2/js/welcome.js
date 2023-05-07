/*Create a ‘welcome.js’ file in the correct folder. In this file,
create one jQuery function that selects the HTML element with the
“liveToastBtn” ID and shows the HTML Toast element with the ID of
‘liveToast’.
This function should be run when the user clicks the ‘Like’
button in the HTML header. ✅

Make a copy of the ‘Like’ button element in the HTML file
and place it directly after the existing ‘Like’ button element.
Change the button text to “I’m Bored” and the element’s ID to “boredBtn”.
In the same ‘welcome.js’ file, create another function that executes a
GET Request to the “https://www.boredapi.com/api/activity/” API,
once the new “I’m Bored” button is clicked. ✅*/
/* ========== my comments =======================
I liked your solution!
I wonder if you hvae learned fetch() method yet?
if so, then it is best to use it instead of XMLHttpRequest.
It is an asynchronous method, so you need to use async/await, or then/catch.
 fetch("https://www.boredapi.com/api/activity/")
  .then((response) => response.json())
  .then((data) => console.log(data));

===============================================*/
// PART.1
const likeBtn = $("#liveToastBtn");

likeBtn.click(function () {
	$("#liveToast").show();
});

$(".btn-close").click(function () {
	$("#liveToast").hide();
});

// PART.2

const boredBtn = $("#boredBtn");
var request = new XMLHttpRequest();
boredBtn.click(function () {
	request.open("get", "https://www.boredapi.com/api/activity/");

	request.onload = function () {
		var response = request.response;
		var parsedData = JSON.parse(response);
		console.log(parsedData);
	};
	request.send();
});
