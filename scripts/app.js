$(document).on("ready", function(){

  $('.form-inline').on("submit", function (event){

    event.preventDefault();
    console.log("something is happening")
    $.ajax({

      method: "get",
      url: "https://api.giphy.com/v1/gifs/search"+ "?"+$(this).serialize(),
      dataType: "json",
      success: onSuccess

    });

  });

});

//var myString = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=cats&limit=25&offset=5&rating=g&lang=en&fmt=json";

function onSuccess (){
  console.log("you made the call correctly")
}
