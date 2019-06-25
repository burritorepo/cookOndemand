

firebase.initializeApp({
    apiKey: "AIzaSyBiFP0LIx1LX2oyNkf3CHjWd4JBvVHX6_Q",
    authDomain: "cookofdemand.firebaseapp.com",
    projectId: "cookofdemand",
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

  //Agregar Documentos.

  function guardar(){
    
    var nombres = document.getElementById('nombres').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var direccion = document.getElementById('direccion').value;


    db.collection("users").add({
        
        nombres: nombres,
        apellido1: apellido1,
        apellido2: apellido2,
        direccion: direccion,
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        
        document.getElementById('nombres').value = '';
        document.getElementById('apellido1').value = '';
        document.getElementById('apellido2').value = '';
        document.getElementById('direccion').value = '';

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });test.firestore.js

  }

  //Leer Documentos.

  var table = document.getElementById('table');
  db.collection("users").onSnapshot((querySnapshot) => {
    table.innerHTML = '';  
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().nombres}`);
        table.innerHTML += 
        `
        <tr>
          
            <td>${doc.data().nombres}</td>
            <td>${doc.data().apellido1}</td>
            <td>${doc.data().apellido2}</td>
            <td>${doc.data().direccion}</td>
            <td><button onclick="eliminar('${doc.id}')" >Eliminar</button></td>
            <td><button onclick="editar('${doc.id}','${doc.data().nombres}','${doc.data().apellido1}','${doc.data().apellido2}','${doc.data().direccion}')" >Editar</button></td>
        </tr>
        `
    });
});

//Borrar Documentos..
function eliminar(id) {
    db.collection("users").doc(id).delete().then(function () {
        console.log("Document successfully delete");
    }).catch(function (error) {
        console.error("Error removing document:", error);
    });

}

//Editar Documentos..

var washingtonRef = db.collection("users").doc(id);
function editar(id,nombres,apellido1,apellido2,direccion) {

    document.getElementById('nombres').value = nombres;
    document.getElementById('apellido1').value = apellido1;
    document.getElementById('apellido2').value = apellido2;
    document.getElementById('direccion').value = direccion;
    var boton = document.getElementById('boton');
    boton.innerHTML = 'Editar';

    boton.onclick = function() {

        var washingtonRef = db.collection("users").doc(id);
    //Set the "capital" field of the city "DC"

    var nombres = document.getElementById('nombres').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var direccion = document.getElementById('direccion').value;

   
    return washingtonRef.update({
        nombres: nombres,
        apellido1: apellido1,
        apellido2: apellido2,
        direccion: direccion,
    })
    .then(function() {
        console.log("Document successfully update");
        boton.innerHTML = 'Guardar';
        document.getElementById('nombres').value = '';
        document.getElementById('apellido1').value = '';
        document.getElementById('apellido2').value = '';
        document.getElementById('direccion').value = '';
    })
    .catch(function() {
        //The document probably doesn't exist.
        console.error("Error updating document:", error);
    });  
    }
}









 