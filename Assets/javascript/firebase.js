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
var usersRef = firebase.database().ref("users/")  //u1+"/" (removed from within the ref())
usersRef.push({name: 'First Person'})
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


// if(u1=== object){
//             alert("user in database")
//             foundUser=true
//             console.log(foundUser)  
          
//         }
//         else{
//             console.log("next child")
//             foundUser = false
//         }
// var USERS_LOCATION = 'https://SampleChat.firebaseIO-demo.com/users';

function userExistsCallback(userId, exists) {
    if (exists) {
        alert('user ' + userId + ' exists!');
    } else {
        alert('user ' + userId + ' does not exist!');
        usersRef.push({ "name":userId})
        location.href="home.html"
    }
}

// // Tests to see if /users/<userId> has any data. 
// function checkIfUserExists(userId) {
//   var usersRef = new Firebase(USERS_LOCATION);
//   usersRef.child(userId).once('value', function(snapshot) {
//     var exists = (snapshot.val() !== null);
//     userExistsCallback(userId, exists);
//   });

function checkUser(u1) {
    console.log('hi')
    usersRef.push({"name": u1})
    // usersRef.child("users").on('child_added', function (snapshot) {
    usersRef.orderByChild("name").equalTo(u1).on("child_added", function(snapshot) {
        // console.log('hi') 
        console.log(snapshot.val().name)
        if(u1 === snapshot.val().name){
            console.log("match found")
        }
        // console.log(snapshot.val())
        // var exists = (snapshot.val() !== null);
        // console.log(exists)

        // userExistsCallback(u1, exists);

        // usersRef.on("child_added", function (snapshot) {  //deleted usersRef.orderByChild("name")
        //     var object = snapshot.val().name
        //     console.log(u1)
        //     console.log(object)
        // })
    })  //function()
}

$("#login").on("click", function (event) {
            event.preventDefault()
            var input = $("#loginUser").val()
            console.log(input)
            checkUser(input)
        })


// playersRef.orderByChild("name").equalTo("John").on("child_added", function(data) {
//     console.log("Equal to filter: " + data.val().name);

$("#signUpBtn").on("click", function (event) {
            event.preventDefault()
            user = $("#registerUser").val().trim()
            // console.log(user)

            // checkUser(user)
            checkUser(user)

        })





