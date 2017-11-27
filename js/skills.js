$(document).ready(function(){
	makeAjaxRequestSkills();
});


function makeAjaxRequestSkills() {
	$.get("skills.json",function(data){
     console.log(data)
     var html='';
     $.each(data.skills,function(i,response){
     	html+='<div class="list-group">'+
     	'<a href="#" class="list-group-item active">'+
     	'<h4 class="list-group-item-heading">'+response.name+'</h4>'+
     	'<p class="list-group-item-text">'+response.description+'</p>'+
     	'</a>'+
     	'</div>'

     });
     $('#respond').html(html);
 });
}
