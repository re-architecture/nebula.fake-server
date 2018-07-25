nebula.fake-server

Requirements
Before you can use json-server you'll need to have a development machine with Node.js and NPM installed. You optionally need to have cURL or Postman installed so you can test your API

You can install Node.js and NPM from the official website.

Installing json-server
Head over to your terminal then run the following command:

npm install -g json-server
Depending on your npm configuration you may need to add sudo before your install command to be able to install packages globally.

You can also install json-server locally by generating a new Node.js module using:

mkdir myproject
cd myproject
npm init
Enter the required details and hit OK to generate a new package.json file in your current folder.

You can then install json-server locally:

$ npm install json-server --save-dev





==============================
$ npm install faker --save-dev
npm install jsonwebtoken --save


npm install --save-dev nodemon

install dependencies:
mpm install

run the app:
npm start
npm run serve

How to login?
You can login by sending a POST request to

POST http://localhost:3000/auth/login
with the following data

{
  "email": "nilson@email.com",
  "password":"nilson"
}
You should receive an access token with the following format

{
   "access_token": "<ACCESS_TOKEN>"
}
You should send this authorization with any request to the protected endpoints

Authorization: Bearer <ACCESS_TOKEN>

ref:
https://nodejs.org/en/download/
https://github.com/typicode/json-server
https://github.com/marak/Faker.js/
https://nodemon.io/
https://github.com/expressjs/morgan
https://github.com/auth0/node-jsonwebtoken

https://www.techiediaries.com/fake-api-jwt-json-server/
https://github.com/auth0/express-jwt

https://c.runoob.com/front-end/854






How to simplify your app’s authentication by using JSON Web Token
https://medium.freecodecamp.org/how-to-make-authentication-easier-with-json-web-token-cc15df3f2228



https://jwt.io/


参考


5 Easy Steps to Understanding JSON Web Tokens (JWT)
https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec

Angular Security - Authentication With JSON Web Tokens (JWT): The Complete Guide
https://blog.angular-university.io/angular-jwt-authentication/

Express, Passport and JSON Web Token (jwt) Authentication for Beginners
https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/

Building a Fake and JWT Protected REST API with json-server
https://www.techiediaries.com/fake-api-jwt-json-server/

JWT: The Complete Guide to JSON Web Tokens
https://blog.angular-university.io/angular-jwt/

7 Best Practices for JSON Web Tokens
https://dev.to/neilmadden/7-best-practices-for-json-web-tokens