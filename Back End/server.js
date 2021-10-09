// const express = require("express");
// const jwt = require("jsonwebtoken");
// const mysql = require("mysql");

// var app = express();

// var bodyParser = require("body-parser");
// // var session = require("express-session");
// // var cookieParser = require("cookie-parser");
// var cors = require("cors");
// app.set("view engine", "ejs");

// app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// //use express session to maintain session data
// // app.use(
// //   session({
// //     secret: "cmpe273_kafka_passport_mongo",
// //     resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
// //     saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
// //     duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
// //     activeDuration: 5 * 60 * 1000,
// //   })
// // );

// app.use(bodyParser.json());

// //Allow Access Control
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,OPTIONS,POST,PUT,DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );
//   res.setHeader("Cache-Control", "no-cache");
//   next();
// });

// var con = mysql.createConnection({
//   host: "uber-eats-db.cmlqtbfzbyat.us-east-2.rds.amazonaws.com",
//   user: "admin",
//   password: "SjsuFall",
//   port: "3306",
//   database: "Uber_Eats",
// });

// con.connect((err) => {
//   if (err) {
//     console.log("Database connection failed " + err.stack);
//     return;
//   }
//   console.log("Connection successfull");
// });

// // con.query(
// //   `INSERT into customer (firstName,lastName,user,
// //     email, password, city, state, country, dob, mob) values ('new jarvis', 'jarvis', 'jarvis', 'jarvis@gmail.com','Qwerty@123','jarvis','jarvis','jarvis','jarvis','jarvis');
// // `,
// //   (err, rows) => {
// //     if (err) throw err;
// //     console.log("Data received from Db:");
// //     console.log(rows);
// //   }
// // );

// // con.query("select * from customer", (err, rows) => {
// //   if (err) throw err;

// //   console.log("Data received from Db:");
// //   console.log(rows);
// // });
// // connection.end();

// app.get("/", (request, reponse) => {
//   reponse.send("Hello World ...!!!");
// });

// app.post("/adduser", function (request, reponse) {
//   console.log("Data received", request.body);
//   const { fname, lname, uname, email, password, mob, address, isRestaurant } =
//     request.body;
//   con.query(
//     `INSERT into customer (firstName,lastName,user,
//       email, password, mob, address, isRestaurant) values ( '${fname}','${lname}','${uname}','${email}','${password}','${mob}','${address}','${isRestaurant}');
//   `,
//     (err, rows) => {
//       if (err) throw err;
//       console.log(rows);
//       reponse.sendStatus(200);
//     }
//   );
// });

// app.post("/login", (request, response) => {
//   const user = {
//     username: request.body.uname,
//   };

//   console.log("Data received", request.body);
//   const { uname, password } = request.body;
//   con.query(
//     `select * from customer where (user = '${uname}' and password='${password}') or (email = '${uname}' and password='${password}');
//   `,
//     (err, rows) => {
//       if (err) throw err;
//       console.log("Data received from Db:");
//       console.log(rows);

//       if (rows && rows.length) {
//         jwt.sign({ user }, "secretKey", { expiresIn: "5m" }, (err, token) => {
//           response.json({
//             token,
//             userData: rows,
//           });
//         });
//       } else {
//         response.sendStatus(403);
//       }
//     }
//   );
// });

// app.post("/posts", verifyToken, (req, res) => {
//   jwt.verify(req.token, "secretKey", (err, authData) => {
//     if (err) {
//       res.sendStatus(403);
//     } else {
//       res.json({
//         message: "Post Created",
//         authData,
//       });
//     }
//   });
// });

// /*** Verify Token middleware
//  *
//  */
// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers["authorization"];
//   if (typeof bearerHeader !== "undefined") {
//     const bearer = bearerHeader.split(" ");
//     // Get token from array
//     const bearerToken = bearer[1];
//     req.token = bearerToken;
//     next();
//   } else {
//     // Forbidden
//     res.sendStatus(403);
//   }
// }

// app.listen(8080, () => {
//   console.log("Started application on port %d", 8080);
// });

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

const db = require("./app/models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to uber eats application." });
});

require("./app/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
