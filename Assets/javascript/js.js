


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


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAcCsp_1wcbimGlS4lKAtxlNz55p5-HbX4",
    authDomain: "bootcamp-project-1-47c35.firebaseapp.com",
    databaseURL: "https://bootcamp-project-1-47c35.firebaseio.com",
    projectId: "bootcamp-project-1-47c35",
    storageBucket: "bootcamp-project-1-47c35.appspot.com",
    messagingSenderId: "692503538126"
  };
  firebase.initializeApp(config);

  // datebase Var
  var database = firebase.database() 


// APIkey for Google Maps Address
var googleAPIkey = "AIzaSyC_xvToL8Tf7cO5--9oGD9SLvkhjOGGM4M"
// Search address for maps
var searchAddress = $("#sampleaddresspull").val()
// query url for searching new address
var googleURL = "https://www.google.com/maps/embed/v1/place?key="+googleAPIkey+"&q="+searchAddress



// Google Maps Embed:
$("#samplemapembed").append("<iframe width='450' height='250' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/search?key="+googleAPIkey+"&q="+searchAddress+" allowfullscreen> </iframe>")

