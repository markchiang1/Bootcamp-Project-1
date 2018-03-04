
// Google Mapps API calls below:
// search term to be updated with id where search value to be inputted
var mapSearch = $("#mapsearchID here")

var googleAPIKey = "AIzaSyC_xvToL8Tf7cO5--9oGD9SLvkhjOGGM4M"

var googlequeryURL = "https://www.google.com/maps/embed/v1/place?key="+googleAPIKey+"&q="+mapSearch



// AJAX Call Below
$.ajax({
    url: googelqueryUrl,
    method: 'GET'
}).then(function (result) {
    $(".gif-holder").empty()



$("#searchbtn").on("click",function(){
    $("#MapsDiv here").empty()
    // Embed Code below, to be pushed search complete
    $("#MapsDiv here").append("<iframe width='450' height='250' frameborder='0' style='border:0' src="+googlequeryURL+" allowfullscreen></iframe>")

})
})