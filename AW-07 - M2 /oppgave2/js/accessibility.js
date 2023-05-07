/*
In the Accessibility’ section,
we have a visual aid for users who struggle to read small font
in the form of a Toggle Switch. When the user
clicks this Toggle Switch to the ‘On’ position,
all text on the web page within <p> tags need to be increased by 20%.
When the user clicks the Toggle Switch back to the ‘Off’ position,
all text on the web page within <p> tags needs to be decreased back
to the original size. ✅

Create a single function in the file that accomplishes this. */

$(document).ready(function () {
	/* ========== my comments =======================
	Your solution has a few bug.
	 1) Because you select div.checkbox, then the text 'Increase Font Size'
	itself is also selected. and when you clikc on this text, the font size
	is increased, but the button is still off.  Then you click on the button or the text to decrease
	the font size,
	it will not work! Yopu have to select the button only.

	2) Assignment says:
	"all text on the web page within <p> tags need to be increased by 20%"
	The oirignal size of paragraph fonts in unknown, some places may be 100%, some other places more or less
	so you have to get the original size of the font, then increase it by 20%.

    Also, You have to create a function as assignment demands.


	const $toggle_checkbox = $("#accessToggle");

	function changeFontSize() {
		const $all_p = $("p");
		const $toggle_parent = $toggle_checkbox.parent();

		$all_p.each(function () {
			let original_font_size = $(this).css("font-size");
			const original_font_value = parseFloat(original_font_size);
			const font_size_unit = original_font_size.replace(original_font_value, "");

			if (!$(this).data("original-font-size")) {
				$(this).attr("data-original-font-size", original_font_size);
			}
			if (
				$toggle_checkbox.prop("checked") &&
				$toggle_parent.hasClass("btn-primary")
			) {
				let larger_font_size = original_font_value * 1.2 + font_size_unit;
				$(this).css("font-size", larger_font_size);
			} else {
				$(this).css("font-size", $(this).data("original-font-size"));
			}
		});
	}
	$toggle_checkbox.change(changeFontSize);


    ================================================== */
	$(".checkbox").click(function () {
		if ($(this).find(".toggle").hasClass("btn-secondary")) {
			$("p").css("font-size", "120%");
		} else if ($(this).find(".toggle").hasClass("btn-primary")) {
			$("p").css("font-size", "100%");
		}
	});
});
