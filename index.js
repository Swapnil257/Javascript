//create a server object:
const http = require('http')



//create a server object:
http.createServer( (req, res)=> {
  console.log(req,"REQ");
  res.write('Server Responded');
  res.end(); //end the response
  


}).listen(3000, ()=>{
 console.log("server start at port 3000"); //the server object listens on port 3000
});


// create express server 

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


