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

	$("#home").click(function(){
		$("#home").toggleClass("active", addOrRemove);
		$("#about").toggleClass("inactive", addOrRemove);
		$("#resume").toggleClass("inactive", addOrRemove);
	});

	$("#about").click(function(){
		$("#about").toggleClass("active", addOrRemove);
		$("#home").toggleClass("inactive", addOrRemove);
		$("#resume").toggleClass("inactive", addOrRemove);
	});

	$("#resume").click(function(){
		$("#resume").toggleClass("active", addOrRemove);
		$("#home").toggleClass("inactive", addOrRemove);
		$("#about").toggleClass("inactive", addOrRemove);
	});
});


