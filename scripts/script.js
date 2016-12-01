$(document).ready(function(){

    var search = function(){
      $.ajax({
        url: searcho,
        dataType:'JSON',
        success: function(data){
          console.log("heres what I found:", data);
        }//end success function
      });//end AJAX
    };//end search func

    $('#button').on('click', function(){
      //assign searchBox value to var
      console.log('clicked');
      var title = $('#searchBox').val();
      var searcho = 'http://www.omdbapi.com/?s=' + title;


    });//end buttonclick
    var printo = function(dayta){
      for (var i = 0; i < dayta.length; i++) {
      console.log("title:",  dayta[i].title );
    }//end forloop
});//end docReady
