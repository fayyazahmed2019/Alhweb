  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDISPRP9Kh8oy3rwufVL7OeG8pnLK0OyVc",
    authDomain: "clasproj.firebaseapp.com",
    projectId: "clasproj",
    storageBucket: "clasproj.appspot.com",
    messagingSenderId: "456995073892",
    appId: "1:456995073892:web:54882c8b3bb4cb6d065471"

  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  console.log(app)

// function saveData(){
//     // app.database().ref('/').push("fayyaz")
//     app.database().ref('/').child("users").push({name: "fayyaz", password: 123})
// }


function signUp(){

    var name = document.getElementById("name").value; 
    var mnumber = document.getElementById("mnumber").value; 
    var wnumber = document.getElementById("wnumber").value; 
    var idetails = document.getElementById("idetails").value; 

    console.log(name, mnumber, wnumber, idetails)

  

    app.database().ref('/contact').push({
        name: name, 
        mnumber: mnumber,
        wnumber: wnumber,
        idetails: idetails
    
    })

    alert("Query Has been Sent Us")
    
 
}

var listBox = document.getElementById('listBox');

function getUserData(){
app.database().ref('/contact').on("child_added",function(data){
  console.log(data.val().idetails,data.key)
  
  ///Created li Element and text node of value 
  var li = document.createElement("li");
  // var liTxt = document.createTextNode(data.val().values);


  var liTxt = document.createTextNode(data.val().name);


  li.appendChild(liTxt);
  
  
  //created Edit BTn
  var editBtn = document.createElement("button")
  var editBtnTxt = document.createTextNode("EDIT");
  editBtn.setAttribute("onclick", "editList(this)");
  editBtn.setAttribute("id" , data.key)
  editBtn.appendChild(editBtnTxt)
  li.appendChild(editBtn)
  
  
  var delBtn = document.createElement("button")
  var delBtnTxt = document.createTextNode("DEL")
  delBtn.setAttribute("onclick", "delList(this)")
  delBtn.setAttribute("id" , data.key)
  delBtn.appendChild(delBtnTxt)
  li.appendChild(delBtn)
  listBox.appendChild(li)

  console.log(listBox.appendChild(li))
  
  })
}


// function getUserData(){
//     var inner = document.getElementById("inner");
//     app.database().ref('/contact').on("child_added", function(data){
//         console.log(data.key)
//    var datav =  data.val();

//     // var h1 = document.createElement('h1');
//     console.log(inner)
//     // h1.innerHTML = data.val()
    
//     inner.innerHTML = datav.name
//     inner.innerHTML = datav.mnumber
//     })
// }

// var id = "Mr2wjBp7_DnAD4NVaOe";

// function updateData(){
//     app.database().ref('/users').child(id).set({pass: "123"})
// }

// function deleteData(){
    
// }


// let login = () => {
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");

//  console.log(email.value, password.value)

//  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
//  .then((result) => {
//    // Signed in
   

//    console.log("user success")
//    console.log(result)
//    // ...
//  })

//  .catch(function (error)  {
//    var errorCode = error.code;
//    var errorMessage = error.message;
//    console.log(errorMessage)
//  })


// }


function login(){
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in

    var user = userCredential.user;
    // ...
    console.log("user success")
    console.log(user)
    alert("successfully signed")
    
    var destination = window.location = "welcome.html";


  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
  });

}



function checksignin(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(user.email)

      var inner = document.getElementById("inner").innerHTML = "Welcome: " + user.email;
      
    
      // ...
    } else {
      // User is signed out
      // ...
      var destination = window.location = "login.html";
    }
  });

}

function logout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    var destination = window.location = "login.html";
  }).catch((error) => {
    // An error happened.
  });
}




// function delAll(){
  
//   listBox.innerHTML = ""
//   app.database().ref("/contact").remove()

// }

function editList(e){
  var litxt = e.parentNode.firstChild.nodeValue
console.log(litxt,'litxt');
var editLiTxt = prompt("EDIT TODO" , litxt)
console.log(editLiTxt);
e.parentNode.firstChild.nodeValue = editLiTxt;
console.log(e.id,'e.id')
// app.database().ref(`/contact/${e.id}`).set({values:editLiTxt})
app.database().ref(`/contact/${e.id}`).update({name:editLiTxt})

.then(function(success){
  console.log(success,'success')
     })
     .catch(function(err){
  console.log(err,'err')
     })
}

function delList(e){
  console.log(e.parentNode)
  e.parentNode.remove()
  // console.log(e.id)
  app.database().ref("contact").child(e.id).remove()
}