import { storage } from "firebase";

function registrar() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {
      verificar()
    })


    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
}

function ingreso() {
  var email2 = document.getElementById('email2').value;
  var contrasena2 = document.getElementById('contraseña2').value;

  firebase.auth().signInWithEmailAndPassword(email2, contrasena2)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ...
    });
}

function observador() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('Existe usuario activo')
      aparece(user);
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;

      console.log('****************');
      console.log(user.emailVerified);
      console.log('****************');

      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log('No existe usuario activo')
      // ...
    }
  });
}
observador();

function aparece(user) {
  var user = user;
  var contenido = document.getElementById('contenido');
  if (user.emailVerified) {
    contenido.innerHTML = `
    <p>Bienvenido!</p>
    <button onclick="cerrar()">Cerrar Sesion</button>`;

  }
}

function cerrar() {
  firebase.auth().signOut()
    .then(function () {
      console.log('Saliendo ...')
    })
    .catch(function (error) {
      console.log(error)
    })
}

function verificar() {
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function () {
    //Email sent.
    console.log('Enviando correo...');
  }).catch(function (error) {
    // An herro hapend.
    console.log(error);
  });
}

//Get Elements
var uploader = document.getElementById('uploader');
var filebutton = document.getElementById('filebutton');

//Listen for file selection 
filebutton.addEventListener('change', function (e) {
  //Get file
  var file = e.target.files[0];

  //Create a Storage ref
  firebase.storage().ref('usuarios/' + filename);


  //Upload file
  var task = storageRef.put(file);


  //Update progress Bar
  task.on('state_changed',

    function progress(snapshot) {
      var percentaje = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentaje;

    },

    function error(err) {

    },

    function complete() {

    },




  );
});
