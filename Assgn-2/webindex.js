/*

//responds to CRUD methods, get post put delete

const http = require('http');

const server = http.createServer((req, res) => {

    const route = req.url;
    console.log("route " + route);

    const routeHandelers = {
        "/": () => {
            return "<h1>Hello World</h1>";

        },
        "/list": () => {

            return "<h1> List </h1>";
        },
        "/detial": () => {
            return "<h1> Detial </h1>";
        },
    };

    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(routeHandelers[route]());
});

const port = 8080;
server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});


//to access just one part of an object can use something like routeHandelers["/detail"];
*/