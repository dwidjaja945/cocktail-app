const fs = require('fs');

module.exports = ( webserver , mysql , database ) => {
    fs.readdir( __dirname , ( err, files ) => {
        if(!err) {
            files.forEach( file => {
                require(`./${file}`)( webserver , mysql , database );
            })
        } else {
            console.log("Error adding routes within index.js file");
        }
    })

}