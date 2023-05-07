/*
In this file, you must create functions to update the ‘about me’ content.

Change all the text that says "Something about me text" to
something about you when the page loads. ✅

All the "Something about me text" needs to be changed from the function.

Change the "student name" to your student name in the about me
section so that it reads: Hello! I am FJ, the code master.  ✅

This change should be done in the same function as the
"something about me text" change function.

When you click the content in the "something about me"
section that you have updated,
the background color for the clicked element needs to change to
powder-blue, and the font color needs to change to white. ✅
*/

$(document).ready(function () {
	/* ===================My comments =================
    - it says "you must create functions to ..."
     As I understand it, you have to create functions like this:

        function changeTextOf($element, text) {
            $element.text(text);
        }

        Now you can use it to change text for two paragraphs
        Because all content to different sections of HTML are in the same file, and it might
        happen that class names are repeated, it will be better to add class name of the section.
        In about page add '.about' class name to make sure we are changing text of the about section
        not same class name in other section.

        const $firstP = $(".about .col-lg-6 p:first"); or: $(".about .col-lg-6 p").first();
	    const $lastP = $(".about .col-lg-6 p:last"); or: $(".about .col-lg-6 p").last();

        changeTextOf($firstP, "I like to make music");
        changeTextOf($lastP, "My favorite sport is MMA");

        - in order to change text:
            I am | student name | - the code master
          into:
            I am Danial, the code master
        Notice it not only the name that needs to be changed, but also | and -

        One solution can be like this:
        Do you see I use first() to get the first element
        and avoiding each() loop?

        const $aboutme_element = $("span.aboutme").first();
        let text = $aboutme_element.text();
        text = text.replace("student name", "Danial, ")
            .replaceAll("|", "")
            .replace("-", "");
        changeTextOf($aboutme_element, text);

        Important: As you see both functions use the same function to change the text,
        as your assignment demands.

        ============= Just for fun ================
        Here is another solution to replace text in
        I am | student name | - the code master.
        Only that you know there are different solutions to the same problem.
        using split and join methods to get rid of | and -
        and then replace student name with Danial:

        const $aboutme_element = $("span.aboutme").first();
        let text = $aboutme_element.text()
        text = text.split("|").join("").split("-").join("").trim();
        text = text.replace("student name", "Danial, ");
        changeTextOf($aboutme_element, text);

        ============= End of fun :) ================

        ========== function for color change =======
        I have created two functions to change color of an element:

        const backgroundColor = "#B0E0E6";
        const fontColor = "white";

        function changeFontColorOf($element, fontColor) {
            $element.css("color", fontColor);
        }

        function changeBackgroundColorOf($element, backgroundColor) {
            $element.css("background-color", backgroundColor);
        }

        Now you can use those functions to change color of the clicked element:

        $firstP.click(function () {
            changeBackgroundColorOf($firstP, backgroundColor);
            changeFontColorOf($firstP, fontColor);
        });

        $lastP.click(function () {
            changeBackgroundColorOf($lastP, backgroundColor);
            changeFontColorOf($lastP, fontColor);
        });



    ================================================== */

	/* here is my code with no comments
    ==================================================
    	function changeTextOf($element, text) {
		$element.text(text);
	}

	const $firstP = $(".about .col-lg-6 p:first");
	const $lastP = $(".about .col-lg-6 p:last");

	changeTextOf($firstP, "I like to make music");
	changeTextOf($lastP, "My favorite sport is MMA");

	const $aboutme_element = $("span.aboutme").first();
	let text = $aboutme_element.text();
	text = text
		.replace("student name", "Danial, ")
		.replaceAll("|", "")
		.replace("-", "");
	changeTextOf($aboutme_element, text);

	const backgroundColor = "#B0E0E6";
	const fontColor = "white";

	function changeFontColorOf($element, fontColor) {
		$element.css("color", fontColor);
	}

	function changeBackgroundColorOf($element, backgroundColor) {
		$element.css("background-color", backgroundColor);
	}

	$firstP.click(function () {
		changeBackgroundColorOf($firstP, backgroundColor);
		changeFontColorOf($firstP, fontColor);
	});

	$lastP.click(function () {
		changeBackgroundColorOf($lastP, backgroundColor);
		changeFontColorOf($lastP, fontColor);
	});

    ======================================================== */

	var firstP = $("div.col-lg-6 p:first");
	var lastP = $("div.col-lg-6 p:last");
	var stud = $("span.aboutme");

	//$("span.aboutme").text("I am | Danial | I'm 22 years of age and like to make music in my free time.");

	$("div.col-lg-6 p:first").text("I like to make music");
	$("div.col-lg-6 p:last").text("My favorite sport is MMA");

	//$(stud, hello).click(function(){
	// $(hello).css({"background-color": "#B0E0E6", "color": "white"});
	// $(stud).css({"background-color": "#B0E0E6", "color": "white"});
	//})

	$(stud).each(function () {
		console.log($(this).text());
		var text = $(this).text().replace("student name", "Danial ");
		$(this).text(text);
	});

	$(firstP).click(function () {
		$(firstP).css({
			"background-color": "#B0E0E6",
			color: "white",
		});
	});

	$(lastP).click(function () {
		$(lastP).css({
			"background-color": "#B0E0E6",
			color: "white",
		});
	});
});
