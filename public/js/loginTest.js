
var users = [
        {
            username: "Anton",
            password: "abc123"
        },

        {   username: "Hans",
            password: "hemligt"
        },

        {
            username: "Malin",
            password: "hundar99"
        }
]

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

for (i=0 ; i < users.length ; i++){
    if (username == users[i].username && password == users[i].password){
        window.location.href='/about'; 
        console.log(username + " logged in!");
    return
    }   
}
window.location.href='/';
console.log("The username " + username + " and the password did not match, please try again!");

}

