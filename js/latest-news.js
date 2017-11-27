$(document).ready(function(e){
	makeAjaxReq();
     
});

function makeAjaxReq(){
	$.ajax({ 
		url: "https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=c25abec4712b4d6d9594471ce7a7e998",
		type: 'GET',
		dataType: 'json'
	}).done(resultHandler)

	.fail(function(error){
		$('#error').fadeIn();
	});
}
function resultHandler(data){
     var html=''
     html+='<div class="row">'
     html+='<div class="col-md-12">'
     $.each(data.articles,function(i,item){
          if(item.publishedAt != null && item.urlToImage != null){
               html+=' <div class="thumbnail" id=shadow>'
               html+=' <div class="caption">'
               html+=	' <div class="thumbnail" id="shadow">'
               html+=' <div class="caption">'
               html+='<h3 id="date">'+item.publishedAt.replace(/\T.*/g,"")+'</h3>'
               html+='<h3 id="explanation"><a href="'+item.url+'" target="_blank">'+item.title+'</a></h3>'
               html+=' <p>'+item.description+'</p>'
               html+='<img src="'+item.urlToImage+'">'
               html+='</div>'
               html+='</div>'
               html+='</div>'
               html+= '</div>'

          }});
     $('#result').html(html);
}
