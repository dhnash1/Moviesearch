$(document).ready(function(){

$(document).on('click', '#button', function(){
  console.log('ya clicked it');
  var input = $('#searchBox').val();
  var website = "http://www.omdbapi.com/?s=" + input;
  $.ajax({
    url:website,
    dataType:'JSON',
    success: function(data){
      console.log('found', data);
      thing1(data);
      }//end success
    });//end ajax

var thing1 = function(x){
  console.log("Hey!", x);



};//endthing1



  });//end on click
});//end docReady
