const express = require('express');
const mysql = require('mysql');
const { credentials } = require('./config/mysqlCredentials');
const webserver = express();
const database = mysql.createConnection( credentials );

webserver.use(express.json());
webserver.use(express.urlencoded());

database.connect( (error) => {
    if(error) throw error;
    console.log("Database connection successful");
});

webserver.use(express.static( __dirname + "/client" + "/public"));

require('./routes')( webserver , mysql , database );


webserver.listen( 9000 , () => {
    console.log("Webserver listening on Port 9000")
});