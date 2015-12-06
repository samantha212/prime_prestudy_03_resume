$(document).ready(function(){
	var userName = prompt("Please provide your name.");
	confirm("Thank you, " + userName + ".  Please prepare to view an amazing resume!  Click okay to continue.");
})

$(document).ready(function(){
	$('button').on('click', function(){
		$(this).closest('html').find('header').show();
		$(this).closest('html').find('main').show();
		$(this).hide();
	});
});


