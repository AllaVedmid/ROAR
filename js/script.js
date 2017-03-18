$( document ).ready(function() {


	window.onbeforeunload = function () {
	  window.scrollTo(0, 0);
	}

	$("input[name='colors']").on("click", function() {
		var colors = $(this).val();
		localStorage.setItem("color", colors);			
	});
	$("input[name='genders']").on("click", function() {
		var genders = $(this).val();
		localStorage.setItem("gender", genders);					
	});
	$("input[name='sizes']").on("click", function() {
		var sizes = $(this).val();
		localStorage.setItem("size", sizes);		
	});
	
	
	$("#addToCard").on('click', function(){
		if((localStorage.getItem("color") !== null) && (localStorage.getItem("gender")!== null) && (localStorage.getItem("size"))!== null){
		    var color = localStorage.getItem("color");
			var gender = localStorage.getItem("gender");
			var size = localStorage.getItem("size");
			var data  = JSON.stringify({ color: color, gender: gender, size: size });
			localStorage.clear();

			console.log(data);
	    }
	    else {
	    	alert('Please, choose all parameters! ');

	    }

			
		
		
	});
	    
});