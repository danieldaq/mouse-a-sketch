console.log("this is a sanity check");

$(document).ready(function(){
	console.log("Let's get coding!")

	function colorMe() {
		var color = $("input").val();
		$(this).css("background", color);
		
	}

	$("td").mouseover(colorMe);

})

