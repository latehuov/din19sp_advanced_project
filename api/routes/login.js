var express = require('express');
var router = express.Router();
//const bcrypt = require('bcrypt');
var db = require('../db');

router.post('/', function (request, response) {
    if (request.body.username && request.body.password) {
        var username = request.body.username;
        var password = request.body.password;
        db.query('SELECT * FROM public.users WHERE u_name = $1', [username],
            function (error, dbResults, fields) {
                if (dbResults.rows.length > 0) {
                    if (password === dbResults.rows[0].password) {
                        console.log("success");
                        response.send(true);
                    }
                    else {
                        console.log("wrong password");
                        response.sendStatus(422);
                    }
                }
                else {
                    console.log("user does not exists");
                    response.sendStatus(422);
                }
            });
    }
    else {
        console.log("Give the username and password");
        response.sendStatus(422);
    }
});

module.exports = router;