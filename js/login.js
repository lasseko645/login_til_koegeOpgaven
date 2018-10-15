
//create the function for the onclick of our id="loginButton"
function clickedLoginButton(){
//local variables to hold our values for the login process
let user = document.getElementById('username')
let pass = document.getElementById('password')

//just a couple of test values for the idea to come trough since we have no database or other means to verify an account
let testUser = "admin"
let testPass = "12345"

//this is the if statement that wil explains the logic of the system login function
if(user == testUser){

    if(pass == testPass){

        window.alert('du er logget in som bruger: ' + user)

    }   else{

        window.alert('forkert kodeord eller brugernavn')

    }


}   else{
    window.alert('forkert kodeord eller brugernavn')
}


}