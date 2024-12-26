class router {
  constructor() {
    this.routes = [];
  }

  GET(path, middleware, callBackFunction) {
    this.routes.push({ path, method: "GET", middleware, callBackFunction });
  }
  POST(path, middleware, callBackFunction) {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      console.log(data);
    });
    this.routes.push({
      path,
      method: "POST",
      middleware,
      callBackFunction,
      data,
    });
  }

  async routerHandler(req, res) {
    const path = req.url;
    const method = req.method;
    //finding the route based on the req.path and req.method
    const route = this.routes.find(
      (route) => route.path == path && route.method == method
    );

    if (route) {
      //check if the route have a middleware
      if (route.middleware != undefined) {
        try {
          await route.middleware(req, res);
        } catch (error) {
          res.end(error);
        }
        if(path=='POST'){
        await route.callBackFunction(req, res, route.data);
      }else{
        await route.callBackFunction(req,res)
      }
     
    }
      await route.callBackFunction(req, res);
    } else {
      res.end("sorry no path found");
    }
  }
}
module.exports = new router();
