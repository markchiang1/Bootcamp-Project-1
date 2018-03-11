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

// database varriabe for firebase call
var database = firebase.database()


    var locationsArray= []
    var dataArray =[]

    var longitude
    var latitude
    var eventName

    // initial User location Map, Static Location of UCI Campus. loads on page ready
    function initMap() {
        var uluru = {lat: 33.6448, lng: -117.834718};
        var map = new google.maps.Map(document.getElementById('addMaps'), {
        zoom: 14,
        center: uluru
        });
        var marker = new google.maps.Marker({
        position: uluru,
        map: map
        });
    }
    

// AJAX Calls Below

// Click Event Below runs AJAX for Google maps AND meetup events in searched City
$("#submitBtn").on("click", function () {
    $("#addMaps").empty()
    event.preventDefault()
    var mapSearch = $("#search").val()
    
    var inputSearch = String(mapSearch)

    database.ref().push({
        city:mapSearch
    })
    var plusAdd = inputSearch.replace(" ","+")
    
    var googleAPIKey = "AIzaSyC_xvToL8Tf7cO5--9oGD9SLvkhjOGGM4M"

    // Database push of city Search
    // database.ref().push({
    //     city:mapSearch
    // })
        $("#search").val("")

    // CORS Redirect: https://crossorigin.me/

    // Meetup AJAX Call Below

    // var APIKey = "fi6P2HJpI6tlPq7b1fupGzo8PFi1AYXA"  

        var meetupURL = "https://crossorigin.me/https://api.meetup.com/2/open_events?key=133614f646262c555e21068514847&sign=true&photo-host=public&country=us&city="+mapSearch+"&state=CA&text=code&category=34&page=10"

            $.ajax({
                url: meetupURL,
                method: "GET"
            }).then(function(response){
                console.log(response)
                
                for (i=0; i< response.results.length; i++){
                    var longitude = response.results[i].group.group_lon
                    var latitude = response.results[i].group.group_lat
                    var eventName = response.results[i].name
                    var image = response.results[i].photo_url
                    var meetupURL = response.results[i].event_url
                    $("#addMeet").append("<div class='card' style='width: 20rem;'><img class='card-img-top'src="+
                    image+" alt=<img href='https://secure.meetupstatic.com/photos/event/2/e/a/d/600_450131949.jpeg'/>><div class='card-block'><h4 class='card-title'>"+
                    eventName+"</h4><p><a href='"+
                    meetupURL+"'>Go To Event</a></p></div>")
                // console.log("EventName: "+eventName)
                // console.log("Latitude Response: "+latitude)
                // console.log("Longitude Response: "+ longitude)
                console.log(meetupURL)

            }
            locationsArray.push("lat: "+latitude,"lng: "+longitude)
            // dataArray.push(locationsArray)
            console.log("locations Array: "+locationsArray)
            console.log("dataArray: "+dataArray)   
            })

            // Google Maps Geocoding API, runs new location map based on search 
            var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address="+mapSearch+"&key=AIzaSyC_xvToL8Tf7cO5--9oGD9SLvkhjOGGM4M"
            $.ajax({
                url: geocodeURL,
                method: "GET"
            }).then(function(mappull){
                console.log(mappull)
                console.log(mappull.results[0].geometry.location)
                
                searchLocation = mappull.results[0].geometry.location
                var mapPlace = document.getElementById('addMaps')

                function locationMap(x) {
                    // Create a map object and specify the DOM element for display.
                    var map = new google.maps.Map(mapPlace, {
                      center: x,
                      zoom: 12
                    });
                    var marker = new google.maps.Marker({
                    position: {lat: 33.6448, lng: -117.834718},
                    map: map
                    });
                }
                locationMap(searchLocation)
                })

})

