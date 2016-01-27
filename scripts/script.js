$(document).ready(function() {
  console.log("jQ ready");


//Input validation.


var $button = $('#button');
var $popupImg = $('.popupImg')
      

	$button.on('click', show);
	$popupImg.on("click", hide);

   	function show() {

		var $textarea = $('textarea');
		var inputValue = $textarea.val();
		
    $popupImg.css("visibility","visible");
      	
      		if (inputValue) {
      			console.log("Message with text");
      			$popupImg.text("Thanks! Your message is in the clouds, in the 10 clouds!") 

      		} else {
      			console.log("Message without text");
      			$popupImg.text("There are times when silence is golden. But please write something, now.") 

      		}

 	}

    function hide() {
        $popupImg.css("visibility","hidden");
        
   	}

});