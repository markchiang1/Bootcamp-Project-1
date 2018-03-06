// APIkey for Google Maps Address
var googleAPIkey = "AIzaSyC_xvToL8Tf7cO5--9oGD9SLvkhjOGGM4M"
// Search address for maps
var searchAddress = $("#sampleaddresspull").val()
// query url for searching new address
var googleURL = "https://www.google.com/maps/embed/v1/place?key="+googleAPIkey+"&q="+searchAddress



// Google Maps Embed:
$("#samplemapembed").append("<iframe width='450' height='250' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/search?key="+googleAPIkey+"&q="+searchAddress+" allowfullscreen> </iframe>")