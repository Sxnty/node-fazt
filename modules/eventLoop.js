const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to the server");
    return res.end();
  }
  if (req.url === "/about") {

    //blocking code
/*     for (let i = 0; i < 100000; i++) {
      console.log(Math.random() * i);
    } */


    res.write("About page");
    return res.end();
  }

  res.end("Not found");
});
server.listen(3000);
console.log("Servidor corriendo en puerto 3000");
