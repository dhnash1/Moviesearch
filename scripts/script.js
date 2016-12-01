$(document).ready(function(){
$(document).on('click', '#button', function(){
  console.log('ya clicked it');
  if (!$('#searchBox').val() ) {
    alert("Input something!");
  }else if ($('#searchBox').val() == "__gita__") {
    easteregg();
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
}//end else
var thing1 = function(rango){
  console.log("Hey!", rango);
  $('#movieDiv').empty();
  if(rango == undefined){
    console.log("Nope!");
    $('#movieDiv').append("<h1>No movies found with that title!<h1>");
  }else{
    for (var i = 0; i < rango.length; i++) {
        $('#movieDiv').append("<div id='inDiv" + [i] + "' class='movie'></div>");
        $('#inDiv' + [i]).append('<h1>' + rango[i].Title + '</h1>');
        $('#inDiv' + [i]).append("<p class='year'>" + rango[i].Year + "</p>");
        if( rango[ i ].Poster == "N/A"){
          $( '#inDiv' + [i] ).append("<p>No Image found!</p>");
        }else{
        $('#inDiv' + [i]).append("<img src = '" + rango[i].Poster + "'/>");
          }//end Else
        }//end forloop
      }
    };//endthing1
  });//end on click
    function easteregg(){
    window.open("http://d.facdn.net/art/anonymousguitar/1480568020/1480568020.anonymousguitar_eegg.png");
  }//end egg
});//end docReady
