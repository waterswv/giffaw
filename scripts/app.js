$(document).on("ready", function() {

  $('.form-inline').on("submit", function(event) {

    event.preventDefault();
    console.log("something is happening")

    $.ajax({
      method: "get",
      url: "https://api.giphy.com/v1/gifs/search" + "?" + $(this).serialize(),
      dataType: "json",
      success: onSuccess

    });

  });

});

function onSuccess(dataFromAPI) {
  $(".gif-img").remove();

  dataFromAPI.data.forEach(function(giph) {
    console.log(giph);
    $('.gif-gallery').append($("<img class='gif-img'src=" + giph.images.fixed_height_small_still.url + ">"));
  });
};
