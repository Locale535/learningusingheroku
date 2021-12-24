const expressnodemodule = require("express"); /*using 'express' from node modules; and storing it in the variable 'expressnodemodule'*/

const pathnodemodule = require("path");

const app = expressnodemodule();
/*initializing a variable app using express, this variable is used to create the server by listening to a port*/

app.get("/", (req, res) => {
  //the "/" refers to the homepage directly without any routes
  res.send(
    //the response to the server here is 'res.send()'; the response can also be other things like a file, json, etc to the page using various syntaxes
    "Server created using express <h1>can also write html in this. </h1>"
  );
});
//creating routes(the individual pages in a site) using express
/*
here, the 'app' is equivalent to 
'http.createServer()' in regular node
http.createServer((req,res)=>{}) is same as 
app.get("/", (req,res)=>{})
*/

//more routes can into that page can be created as below
app.get("/routes", (req, res) => {
  res.send("This is a route created using express ");
});
app.get("/about", (req, res) => {
  res.send("<p>This about route is created using express</p>");
});

/*using the server response "res.sendFile()" to send a file to the page*/
/*
using the 'path' module to send the file; syntax: path.join(__dirname,"public","login.html")
'__dirname' gives the current folder, and the file to be joined is in the 'public' folder which contains the 'login.html' file to be sent to the page
(below, sent the file directly without the public folder)*/
app.get("/login", (req, res) => {
  res.sendFile(pathnodemodule.join(__dirname, "login.html"));
  //   res.sendFile(login.html); cannot send the file to the server page directly as this and the file needs to be joined using the path module
});

/*STATIC FOLDER */
/*setting a static folder to use files(.html) within it as routes directly */
app.use(
  expressnodemodule.static(pathnodemodule.join(__dirname, "staticFolder"))
);
//using this, the files within this 'staticFolder' will be directly added as routes; and they can be seen in the page using 'localhost:PORT/filename.html' syntax ; the '.html' extension is necessary

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server created using express is running on port 5000");
});

/*just created a server using express*/
/*here, the 'app' is equivalent to 
'http.createServer()' in regular node */

//regular node: http.createServer().listen()
//express: app.listen()

/*express makes it a lot easier to create and manipulate servers than using regular node js */
