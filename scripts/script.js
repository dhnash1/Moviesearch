$(document).ready(function(){

$(document).on('click', '#button', function(){
  console.log('ya clicked it');
  if (!$('#searchBox').val() ) {
    alert("Input something!");
  }else{
  var input = $('#searchBox').val();
  var website = "http://www.omdbapi.com/?s=" + input;
  $.ajax({
    url:website,
    dataType:'JSON',
    success: function(data){
      console.log('found', data.Search);
      thing1(data.Search);

      }//end success
    });//end ajax
}
var thing1 = function(rango){
  console.log("Hey!", rango);
  $('#movieDiv').empty();
  for (var i = 0; i < rango.length; i++) {


    $('#movieDiv').append('<h1>' + rango[i].Title + '</h1>');
    $('#movieDiv').append("<img src = '" + rango[i].Poster + "'/>");
    $('#movieDiv').append("<p class='year'>" + rango[i].Year + "</p>");

}
};//endthing1
  });//end on click
});//end docReady
