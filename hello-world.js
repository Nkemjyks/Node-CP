const http = require('http')
const port = 3000
const fs = require('fs')
const { log } = require('console')

// file named hello-world.js that prints "HELLO WORLD" to the console
console.log("HELLO WORLD")

// server that runs on port 3000 and responds with ...@ http://localhost:3000
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hello Node!!!!</h1>\n')
    res.end()   
    
})

server.listen(port,'localhost', ()=>{
    console.log('listening for requests on port 3000');
    
})

// require the file system create a file named "welcome.txt" containing one line "Hello Node".
fs.existsSync('./welcome.txt')?
fs.unlink('./welcome.txt',err=>{err?console.log('err'):fs.writeFile('./welcome.txt','Hello Node',(err,data)=>{err?console.log('Error writing file:', err):console.log('file written successfully');})}):
fs.writeFile('./welcome.txt','Hello Node',(err,data)=>{err?console.log('Error writing file:', err):console.log('file written successfully');})

// ...reads and console.log data from hello.txt
fs.readFile('./hello.txt',(err,data)=>{
    err?
    console.log('file does not exist'):
    console.log(data.toString())
    
})


