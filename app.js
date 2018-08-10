const os = require('os')
const fs = require('fs')
const userData = require('./user.js')

let user =  os.userInfo();

console.log(user)
console.log(user.username)
console.log(userData)

let platform = os.platform();
let date = new Date();

let message = `User ${user.username} started app at ${date}\n`

console.log(platform)

fs.appendFile("hello.txt",message,(err)=>{
   if(err){
       console.log('error')
   }
} )