$(document).ready(function(){
	navbarAjax();
	
});

function navbarAjax() {
     $.get("navigation.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
      }

      
