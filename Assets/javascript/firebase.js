var config = {
    apiKey: "AIzaSyAcCsp_1wcbimGlS4lKAtxlNz55p5-HbX4",
    authDomain: "bootcamp-project-1-47c35.firebaseapp.com",
    databaseURL: "https://bootcamp-project-1-47c35.firebaseio.com",
    projectId: "bootcamp-project-1-47c35",
    storageBucket: "bootcamp-project-1-47c35.appspot.com",
    messagingSenderId: "692503538126"
};
// firebase.initializeApp(config);

// datebase Var
var database = firebase.database()

var user = ''
var foundUser = false

$("#login").on("click", function (event) {
    event.preventDefault()
    var input = $("#loginUser").val()
    console.log(input)
    if(input === object){
        alert("user in database")
        console.log("Found Child")
        foundUser =true;
        $('#user').html(input)
        location.href="home.html"
    }
    else{
            alert("must sign up")
            foundUser = false;
            location.href="signUp.html"
    }
})


database.ref().on("child_added", function(snapshot){
    var object = snapshot.val()
    console.log(object)
    
    })

//register button, need to upload to firebase.
$("#signUpBtn").on("click", function (event) {
    event.preventDefault()
    user = $("#registerUser").val().trim()
    console.log(user)
    if(user === object){
        alert("user in database")
        console.log("Found Child")
        foundUser =true;
        $('#user').html(user)
        // location.href="home.html"
    }
    else{
            alert("must sign up")
            foundUser = false;
        }
    // database.ref().orderByChild().equalTo(user){       
})

database.ref("/"+user).push({
    name:user
})

            

