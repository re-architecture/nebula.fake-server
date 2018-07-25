//const express = require('express')
const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');
const fs = require('fs');
const config = require('./config')

const dbRouter = jsonServer.router('app/database/database.json');
const userdb = JSON.parse(fs.readFileSync('app/database/users.json', 'UTF-8'));

//const app = express()
const app = jsonServer.create();

//const logger = require('morgan');
//app.use(logger('dev'));

// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTML forms
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(jsonServer.defaults());

// Check if the user exists in database
function isAuthenticated({ userID, password }) {
    return userdb.users.findIndex(user => user.userID === userID && user.password === password) !== -1;
}

app.post('/api/auth/signin', function (req, res) {

    const { userID, password } = req.body;

    var status, message;

    if (isAuthenticated({ userID, password }) === true) {

        const expiresIn = config.app.expiresIn;

        // Create a token from a payload 
        const access_token = jwt.sign({ userID, password }, config.app.secretKey, { expiresIn });

        status = 200;
        message = "Signin Successful";
        res.status(status).json({ message, access_token });

    } else {
        status = 401
        message = 'Incorrect userID or password'
        res.status(status).json({ status, message })
    }

});


app.use(/^(?!\/api\/auth).*$/, (req, res, next) => {
    // check header or url parameters or post parameters for token
    //var token = req.body.token || req.query.token || req.headers['x-access-token'];

    var status, message;

    if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
        status = 401
        message = 'Error in authorization format'
        res.status(status).json({ status, message });
        return;
    }

    try {

        const token = (req.headers.authorization.split(' ')[1])

        // Verify the token 
        jwt.verify(token, config.app.secretKey, function (err, decode) {

            if (err) {
                status = 401
                message = 'Wrong Token'
                res.status(status).json({ status, message })

            } else {
                next();
            }
        });

        //next()

    } catch (err) {

        status = 401
        message = 'Error access_token is revoked'
        res.status(status).json({ status, message })
    }
})

/* 
const expressJwt = require('express-jwt');

//const RSA_PUBLIC_KEY = fs.readFileSync('./demos/public.key');

const checkIfAuthenticated = expressJwt({
    //secret: RSA_PUBLIC_KEY
    secret: SECRET_KEY
});

app.use('/api', checkIfAuthenticated, dbRouter);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('invalid token...');
    }
}); 
*/

app.use('/api', dbRouter);

const port = process.env.PORT || config.app.port;

app.listen(port, () => console.log(`Server app (auth) is listening on ${port}...`));