$(document).ready(function(e){
	
     ajaxRequestDailyPhoto();
     makeAjaxRecentPhoto();
});

function ajaxRequestDailyPhoto() {
 $.ajax({ 
     url: "https://api.nasa.gov/planetary/apod?api_key=LXZnFUPNcwZrPCIHgn2GDBDXSFhIGcxV4HYXGzta",
     context: document.body,
     success: function(data){
          handleData(data);

     }});
}
function handleData(data) {
     //console.log(data.url)
     var html='<div class="row">'+
     '<div class="col-lg-12">'+
     ' <div class="thumbnail">'+

     
     ' <div class="caption">'+
     '<h3 id="date">'+data.date+'</h3>'+
     '<h3 id="explanation">'+data.title+'</h3>'+
     ' <p>'+data.explanation+'</p>'+
     '</div>'+
     '</div>'+
     '</div>'+
     '</div>'

     if(data.media_type == "video") {
     	$("#image").css("display", "none"); 
     	$("#video").attr("src", data.url);
     }
     else {
     	$("#video").css("display", "none"); 
     	$("#image").attr("src", data.url);

     }

     $('#result').append(html);
}

function makeAjaxRecentPhoto() {
   $.ajax({ 
       url: "https://api.nasa.gov/EPIC/api/natural?api_key=LXZnFUPNcwZrPCIHgn2GDBDXSFhIGcxV4HYXGzta",
       context: document.body,
       success: function(res){
           recentPhoto(res);
             //console.log(res)
        }});
}
function recentPhoto(response) {
   var html2='<div class="row">'+
   '<div class="col-lg-12">'+
   ' <div class="thumbnail">'+
   ' <div class="caption">'+
   '<h3 id="date2">'+response[0].date+'</h3>'+
   '<h3 id="caption1">'+response[0].caption+'</h3>'+
   '</div>'+
   '</div>'+
   '</div>'+
   '</div>'
   $("#image2").attr("src", "https://epic.gsfc.nasa.gov/archive/natural/"+response[0].date.replace(/\-/g, "/").replace(/\s.*$/g,"")+"/png/"+response[0].image+".png");
   $('#result2').append(html2);
}
