function checkAddress(emailchk, passwordchk) {

var val = document.getElementById('emailchk').value;
var val2 = document.getElementById('passwordchk').value;

if (val == "") {
    alert("Email address required.");
   
}

else if (val2 == "") {
    alert("Password required.");
}
else {
    

if (val == "alharam" && val2 == 123){

    alert("successfully signed")
    
    var destination = window.location = "welcome.html";
        console.log(destination);
}



else if (val != "alharam" && val2 == 123){

    alert("Please Type Correct Email")

    document.getElementById('emailchk').focus; 

}




else if (val == "alharam" && val2 != 123){

    alert("Please Type Correct Password")

    document.getElementById('passwordchk').focus; 

}



else {

    alert("Email & Password not Match")
}
}

}



function gotoinquiry(){
    var destination = window.location = "contact.html";   
}