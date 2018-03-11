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




// database.ref().on("child_added", function(snapshot){
    //     var object = snapshot.val()
    //     console.log(object)
    // })
    // object.child('name').off();
function checkUser(u1){
    var usersRef = firebase.database().ref(u1+"/")
    usersRef.orderByChild("name").equalTo(u1).on("child_added", function(snapshot){
        var object = snapshot.val().name
        // console.log(u1)
        console.log(object)
        if(u1=== object){
            alert("user in database")
            console.log("Found Child")
            foundUser=true
            console.log(foundUser)  
            return true
            location.href="home.html"
        }
    })
}

$("#login").on("click", function (event) {
    event.preventDefault()
    var input = $("#loginUser").val()
    console.log(input)

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
})


// playersRef.orderByChild("name").equalTo("John").on("child_added", function(data) {
//     console.log("Equal to filter: " + data.val().name);

$("#signUpBtn").on("click", function (event){
    event.preventDefault()
    user = $("#registerUser").val().trim()
    console.log(user)
    var inDatabase = checkUser(user)
    if(inDatabase){
        alert("That user already exists")
        alert("imposter")
    }
    else{
        database.ref("/"+user).push({name:user})
        alert("added user")
    }
})
    


            

