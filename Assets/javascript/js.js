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



// Google Mapps API calls below:
// search term to be updated with id where search value to be inputted


// AJAX Call Below


$("#submitBtn").on("click", function () {
    $("#addMaps").empty()
    var mapSearch = $("#search").val()
    
    var inputSearch = String(mapSearch)

    database.ref().push({
        city:mapSearch
    })
    var plusAdd = inputSearch.replace(" ","+")
    
    var googleAPIKey = "AIzaSyC_xvToL8Tf7cO5--9oGD9SLvkhjOGGM4M"
    
    var googlequeryURL = "https://www.google.com/maps/embed/v1/place?key=" + googleAPIKey + "&q="+plusAdd
    
    console.log("button works")
    console.log(inputSearch)
    
    database.ref().push({
        city:mapSearch
    })


        // Embed Code below, to be pushed search complete
        $("#addMaps").append("<iframe width='650' height='450' frameborder='0' style='border:0' src=" + googlequeryURL + " allowfullscreen></iframe>")

        $("#search").val("")
  


// CORS Redirect: https://crossorigin.me/


    var meetupURL = "https://crossorigin.me/https://api.meetup.com/2/open_events?key=133614f646262c555e21068514847&sign=true&photo-host=public&country=us&city="+mapSearch+"&state=CA&text=code&category=34&page=10"

// var APIKey = "fi6P2HJpI6tlPq7b1fupGzo8PFi1AYXA"  

// AJAX Call Below



$.ajax({
    url: meetupURL,
    method: "GET"
}).then(function(response){
    console.log(response)
    
    for (i=0; i< response.results.length; i++){
        var longitude = response.results[i].group.group_lon
        var latitude = response.results[i].group.group_lat
    console.log("Latitude Response: "+latitude)
    console.log("Longitude Response: "+ longitude)
    }
})
})