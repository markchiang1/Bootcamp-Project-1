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

//**** Had an Function afterCheck() below here ********************
// var inDatabase = checkUser(input)
    // if(inDatabase===false){
    //     alert("must sign up")
    //     foundUser = false;
    //     database.ref("/"+input).push({name:input})
    // }
    // else{
    //     $('#user').html(user)
    //     location.href="home.html"
    // }

function checkUser(u1){
    var usersRef = firebase.database().ref(u1+"/")
    usersRef.orderByChild("name").equalTo(u1).on("child_added", function(snapshot){
        var object = snapshot.val().name
        console.log(u1)
        console.log(object)
        if(u1=== object){
            alert("user in database")
            foundUser=true
            console.log(foundUser)  
            // location.href="home.html"
        }
        else{
            console.log("next child")
            foundUser = false
        }
    }) 
}

$("#login").on("click", function (event) {
    event.preventDefault()
    var input = $("#loginUser").val()
    console.log(input)
    checkUser(input)
})


// playersRef.orderByChild("name").equalTo("John").on("child_added", function(data) {
//     console.log("Equal to filter: " + data.val().name);

$("#signUpBtn").on("click", function (event){
    event.preventDefault()
    user = $("#registerUser").val().trim()
    console.log(user)

    // checkUser(user)
    

   checkUser(user)
    
})
    


            

