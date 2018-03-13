


$("#login").on('click', function (event) {
    event.preventDefault()
    var input = $("#loginUser").val()
    console.log(input)
    // if(localStorage.getItem(input)===null){
    //     console.log('Please Sign Up')
    // }
    localStorage.setItem('user', input)
    location.href="home.html"

})


// $("#signUpBtn").on("click", function (event){
//     event.preventDefault()
//     user = $("#registerUser").val().trim()
//     console.log(user)
//     if(localStorage.getItem(user)===null){
//         localStorage.setItem(user,user)
//     }
//     else if(localStorage.getItem(user)===user){
//         alert('User already exits!')
//     }
// })
