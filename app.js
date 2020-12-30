/*const http = require("http");
http.createServer(function(request,response){
     
    response.end("Hello NodeJS!");
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});*/
const os = require("os");
const greeting = require("./greeting");
 
// получим имя текущего пользователя
/*let userName = os.userInfo().username;
 
 
console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));

const User = require("./user.js");
 
let eugene = new User("Eugene", 32);
eugene.sayHi();*/

/*var greeting1 = require("./greeting.js");
console.log(`Hello ${greeting1.name}`); //Hello Alice
 
var greeting2 = require("./greeting.js");
greeting2.name= "Bob";
 
console.log(`Hello ${greeting2.name}`); //Hello Bob
// greeting1.name тоже изменилось
console.log(`Hello ${greeting1.name}`); //Hello Bob*/

/*const welcome = require("./welcome");
 
welcome.getMorningMessage();
welcome.getEveningMessage();*/
 
/*global.name = "Eugene";
 
global.console.log(date);
console.log(greeting.getMessage());*/

/*let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];
 
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);*/

/*const nodemailer = require('nodemailer')

let testEmailAccount = await nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: '',
    pass: '',
  },
})

let result = await transporter.sendMail({
  from: '"Node js" <nodejs@example.com>',
  to: '',
  subject: 'Message from Node js',
  text: 'This message was sent from Node js server.',
  html:
    'This <i>message</i> was sent from <strong>Node js</strong> server.',
})

console.log(result)*/