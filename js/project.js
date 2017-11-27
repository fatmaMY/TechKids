$(document).ready(function(){
	makeAjaxReqCurrent()
	onClickFav();
	
	
});

function makeAjaxReqFav() {
	$.ajax({
		url: 'https://gh-pinned-repos.now.sh/?username=fatmaMy',
		type: 'GET',
		dataType: 'json'
	}).success(favoriteHandle)

	.fail(function(error){
		$('#error').show();
	});
}


function onClickFav(e) {
	$('#fav').click(function(e){
		$('#current').hide();
		$('#favorite').show();
		$('#error').hide();
		e.preventDefault();
		makeAjaxReqFav();

	});
}

function makeAjaxReqCurrent() {

	$.ajax({
		url: 'https://api.github.com/users/fatmaMY/repos?sort=updated&per_page=5',
		type: 'GET',
		dataType: 'json'
	}).success(resultHandler)

	.fail(function(error){
		$('#error').fadeIn();
	});
  $('#curr').click(function(e){
		$('#favorite').hide();
		$('#current').show();
		$('#error').hide();
		e.preventDefault();

	});
	
}

function onClickCurrent(){
	$('#curr').click(function(e){
		$('#favorite').hide();
		$('#current').show();
		$('#error').hide();
		e.preventDefault();
		makeAjaxReqCurrent();
		
		
	});
}

function resultHandler(data) {
	var html=''
	html+='<div class="row">'
	html+='<ul>'
	$.each(data,function(i,item){
	
		html+='<li><a href="'+item.html_url+'" target="_blank">'+item.name+'</a>'+'<h3 class="whiteText">Last update at: '+item.pushed_at.replace(/\T.*$/g,"")+'</h3></li><br>'
	    });
	    html+='</ul>'
		html+='</div>'
		html
		
	$('#current').html(html);

}

function favoriteHandle(data) {
	var html2=''
	html2+='<div class="row">'
	html2+='<ul>'
	$.each(data,function(i,item){
	
		html2+='<li><a href="https://github.com/fatmaMY/'+item.repo+'" target="_blank">'+item.repo+'</a>'+'<h3 class="whiteText">Language: '+item.language+'</h3></li></br>'
	    });
	    html2+='</ul>'
		html2+='</div>'
		html2
		
	$('#favorite').html(html2);

}
