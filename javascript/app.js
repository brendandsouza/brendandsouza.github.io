$(document).ready(function(){
	// // When the user scrolls the page, execute myFunction 
	// window.onscroll = function() {myFunction()};

	// // Get the navbar
	// var navbar = document.getElementById("navbar");

	// // Get the offset position of the navbar
	// var sticky = navbar.offsetTop;

	// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	// function myFunction() {
	//   if (window.pageYOffset >= sticky) {
	//     navbar.classList.add("sticky")
	//   } else {
	//     navbar.classList.remove("sticky");
	//   }
	// }

	// Get current page URL
	var url = window.location.href;

	// remove # from URL
	url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

	// remove parameters from URL
	url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

	// select file name
	url = url.substr(url.lastIndexOf("/") + 1);

	// If file name not avilable
	if(url == ''){
	url = 'index.html';
	}

	// Loop all menu items
	$('.navbar').each(function(){

	// select href
	var href = $(this).find('a').attr('href');

	// Check filename
	if(url == href){

		// Add active class
		$(this).addClass('active');
	}
	});
});


