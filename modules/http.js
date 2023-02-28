const http = require("http");

const server = http
  .createServer((request, response) => {
    if (request.url === "/about") {
      response.write("About");
      return response.end();
    }
    response.write(`
    <h1>Not Found </h1>
    <p>the requested page is not found</p>
    `);
    response.end();
  })
  .listen(3000);

console.log("Servidor escuchando en el puerto 3000");
