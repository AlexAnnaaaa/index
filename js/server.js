const http = require("http");

const host = "localhost";

// or port 3000
const port = "8000";

// http://localhost:8000

const requireListener = function(req, res) {
  res.writeHead(200);
  res.end("HELLO");
}

const  server = http.createServer(requireListene);
server.listen(port, host, () => {

console.log(`Сервер запущен на http://${host};${port}`)
});

const a = {
  b: '1',
  c: '2',
}
console.log(a,b);