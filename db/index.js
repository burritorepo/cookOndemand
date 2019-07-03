//Configuracion Base
var express = require("express");
(app = express()),
  (bodyParser = require("body-parser")),
  (morgan = require("morgan")),
  (firebase = require("firebase"));

var port = process.env.PORT || 8080;

//Configuracion Firebase Produccion
var config = {
  apiKey: "AIzaSyBTI-rQGu3PvECS3I6Uflb0tIT5rXcpZ5E",
  authDomain: "cookondemand-95c24.firebaseapp.com",
  databaseURL: "https://cookondemand-95c24.firebaseio.com",
  projectId: "cookondemand-95c24",
  storageBucket: "cookondemand-95c24.appspot.com",
  messagingSenderId: "351355206454",
  appId: "1:351355206454:web:2ac399d69ca380b4"
};

// Initialize Firebase
firebase.initializeApp(config);
//var db=firebase.database();
var ref = firebase.database().ref("cookondemand");
var colsolicitud = ref.child("Solicitud");
var colpropuesta = ref.child("Propuesta");
//var usersRef = db.ref("Propuesta");

// Configure APP
app.use(bodyParser.urlencoded({ extended: true })), app.use(bodyParser.json());

// Configure APP to Handle Cors requests
// Middleware

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POSTS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-with,  content-type, Authorization"
  );
  next();
});

//Configuracion Base
app.use(morgan("dev"));
//Api solo con LocalHost
app.get("/", function(req, res) {
  res.send("Bienvenido a las Apis de Cook On Demand");
});

//API
var apiRouter = express.Router();
apiRouter.use(function(req, res, next) {
  console.log("App autenticada");
  next();
});

//Api solo con Api
apiRouter.get("/", function(req, res) {
  res.json({ message: "VB el formato en json" });
});

//Inicio de Api de la solicitud
//***************************************** */
apiRouter
  .route("/solicitud")
  .post(function(req, res) {
    var soli = {};
    soli.idship = req.body.idship;
    soli.address = req.body.address;
    soli.pax = req.body.pax;
    soli.preferences = req.body.preferences;
    soli.energy = req.body.energy;
    soli.burners = req.body.burners;
    soli.oven = req.body.oven;
    soli.dateTime = req.body.dateTime;
    soli.restrictions = req.body.restrictions;
    soli.obs = req.body.obs;
    soli.idclie = req.body.idclie;
    soli.state = req.body.state;
    colsolicitud.push(
      {
        idship: req.body.idship,
        address: req.body.address,
        pax: req.body.pax,
        preferences: req.body.preferences,
        energy: req.body.energy,
        burners: req.body.burners,
        oven: req.body.oven,
        dateTime: req.body.dateTime,
        restrictions: req.body.restrictions,
        obs: req.body.obs,
        idclie: req.body.idclie,
        state: req.body.state
      },
      function(err) {
        if (err) {
          res.send(err);
        } else {
          res.json({ message: "Success: Solicitud creado" });
        }
      }
    );
  })
  .get(function(req, res) {
    //Traer todos las solicitudes desde Firebase
    colsolicitud.once("value", function(snap, prevChildKey) {
      res.json(snap.val());
    });
  });

// Routes para tratamiento del endpoint de Solicitudes (Eliminar,buscar,actualizar)

apiRouter
  .route("/solicitud/:uid")
  .get(function(req, res) {
    var uid = req.params.uid;
    if (uid.length != 20) {
      res.json({ message: "Error Key Invalido" });
    } else {
      colsolicitud.child(uid).once("value", function(snap) {
        if (snap.val() == null) {
          res.json({ message: "Error Solicitud no encontrada" });
        } else {
          res.json(snap.val());
        }
      });
    }
  })
  .delete(function(req, res) {
    var uid = req.params.uid;
    colsolicitud.child(uid).remove(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Solicitud eliminada:" + uid });
      }
    });
  })
  .put(function(req, res) {
    var uid = req.params.uid;
    soli = {};
    if (req.body.idship) soli.idship = req.body.idship;
    if (req.body.address) soli.address = req.body.address;
    if (req.body.pax) soli.pax = req.body.pax;
    if (req.body.preferences) soli.preferences = req.body.preferences;
    if (req.body.energy) soli.energy = req.body.energy;
    if (req.body.burners) soli.burners = req.body.burners;
    if (req.body.oven) soli.oven = req.body.oven;
    if (req.body.dateTime) soli.dateTime = req.body.dateTime;
    if (req.body.restrictions) soli.restrictions = req.body.restrictions;
    if (req.body.obs) soli.obs = req.body.obs;
    if (req.body.idclie) soli.idclie = req.body.idclie;
    if (req.body.state) soli.state = req.body.state;
    colsolicitud.child(uid).update(soli, function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Actualizado la solicitud con exito" });
      }
    });
  });
//Fin del Api de la solicitud
//***************************************** */

//Inicio de Api de la propuesta
//***************************************** */
apiRouter
  .route("/propuesta")
  //Crear un Chef desde postman
  .post(function(req, res) {
    var propuesta = {};
    propuesta.idproposal = req.body.idproposal;
    propuesta.idship = req.body.idship;
    propuesta.idchef = req.body.idchef;
    propuesta.starter = req.body.starter;
    propuesta.starter_desc = req.body.starter_desc;
    propuesta.entry = req.body.entry;
    propuesta.entry_desc = req.body.entry_desc;
    propuesta.main = req.body.main;
    propuesta.main_desc = req.body.main_desc;
    propuesta.dessert = req.body.dessert;
    propuesta.dessert_desc = req.body.dessert_desc;
    propuesta.state = req.body.state;

    colpropuesta.push(
      {
        idchef: req.body.idchef,
        idship: req.body.idship,
        idproposal: req.body.idproposal,
        starter: req.body.starter,
        starter_desc: req.body.starter_desc,
        entry: req.body.entry,
        entry_desc: req.body.entry_desc,
        main: req.body.main,
        main_desc: req.body.main_desc,
        dessert: req.body.dessert,
        dessert_desc: req.body.dessert_desc,
        state: req.body.state
      },
      function(err) {
        if (err) {
          res.send(err);
        } else {
          res.json({ message: "Success: Propuesta creada" });
        }
      }
    );
  })
  .get(function(req, res) {
    //Traer todos los chef desde Firebase
    colpropuesta.once("value", function(snap, prevChildKey) {
      res.json(snap.val());
    });
  });

// Routes para tratamiento del endpoint de propuesta (Eliminar,buscar,actualizar)

apiRouter
  .route("/propuesta/:uid")
  .get(function(req, res) {
    var uid = req.params.uid;
    if (uid.length != 20) {
      res.json({ message: "Error Key Invalido" });
    } else {
      colpropuesta.child(uid).once("value", function(snap) {
        if (snap.val() == null) {
          res.json({ message: "Error propuesta no encontrada" });
        } else {
          res.json(snap.val());
        }
      });
    }
  })
  .delete(function(req, res) {
    var uid = req.params.uid;
    colpropuesta.child(uid).remove(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Propuesta eliminada:" + uid });
      }
    });
  })
  .put(function(req, res) {
    var uid = req.params.uid;
    propuesta = {};
    if (req.body.idchef) propuesta.idchef = req.body.idchef;
    if (req.body.idproposal) propuesta.idproposal = req.body.idproposal;
    if (req.body.idship) propuesta.idship = req.body.idship;
    if (req.body.starter) propuesta.starter = req.body.starter;
    if (req.body.starter_desc) propuesta.starter_desc = req.body.starter_desc;
    if (req.body.entry) propuesta.entry = req.body.entry;
    if (req.body.entry_desc) propuesta.entry_desc = req.body.entry_desc;
    if (req.body.main) propuesta.main = req.body.main;
    if (req.body.main_desc) propuesta.main_desc = req.body.main_desc;
    if (req.body.dessert) propuesta.dessert = req.body.dessert;
    if (req.body.dessert_desc) propuesta.dessert_desc = req.body.dessert_desc;
    if (req.body.state) propuesta.state = req.body.state;
    colpropuesta.child(uid).update(propuesta, function(err) {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Actualizada la Propuesta con exito" });
      }
    });
  });

//Fin del Api de la propuesta
//***************************************** */

//Registrar Salida Route
app.use("/api", apiRouter);
app.listen(port);
console.log("Corriendo en el Puerto" + port);
