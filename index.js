const whatever = require("uuid");

console.log("Hello");
console.log(whatever.v1());
/*node and npm allow to access the js framework(library of already written js)
built by node and use its functionality in our projects; 
which if otherwise would have to start everything from very basic scratch
(like the above uuid module, it is possible to create unique ids' from scratch in our own js but using the node module 'uuid' makes it very much easier);
*/
/*for eg: using the node module http to create a local server below*/
const usingnodemodulehttp = require("http");

/*
http.createServer();
http.createServer(() => {});
// c = (parameter) => {console.log(parameter);};
// c("letter");
http.createServer((req, res) => {});
http.createServer((req, res) => {
  res.write("This is a server response");
  res.end();
});
*/
/*
http.createServer().listen();
http.createServer().listen("port-number, not string", () => {});
// http.createServer().listen(1000, () => {console.log(2 + 2);});*/

/*
http.createServer().listen();
htpp.createServer(() => {}).listen("PORT-not string", () => {});
http
  .createServer((req, res) => {
    res.write("This server is creates using node js");
    res.end();
  })
  .listen(1111, () => {
    console.log("Server on port 1111 is running");
  });
*/

// usingnodemodulehttp.createServer().listen();
// usingnodemodulehttp.createServer((req,res)=>{}).listen(9000,()=>{});
usingnodemodulehttp
  .createServer((req, res) => {
    res.write("A server using the node module http is created here");
    res.end();
  })
  .listen(1111, () => {
    console.log("server with port 1111 is running");
  });

/*the same server above can be created 
  using express in this simple way:
  
  const whatever = require("express");
  const whatevervariable = whatever(); //initializing a variable using express to run server

  whatevervariable.listen(1111, ()=>{console.log("server with port 1111 is running using express")});
   */
