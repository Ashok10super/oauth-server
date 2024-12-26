const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const http = require("http");
const router = require("./Router");

router.GET('/',undefined,(req,res)=>{
  res.end("Hi from the router")
})

const server = http.createServer((req, res) => {
  router.routerHandler(req,res)
});
server.listen(process.env.PORT, () => {
  console.log("server is listening at", process.env.PORT);
});
