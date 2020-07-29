const express= require("express");
const app = express();
const morgan = require("morgan");


//configuraciones
app.set("port" , process.env.PORT || 3000);
app.set("json spaces" , 2);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//rutas
app.use(require("./rutas/index"));
app.use("/api/movies",require("./rutas/movies"));
app.use("/api/users",require("./rutas/users"));

//empezar servidor
app.listen(app.get("port") , () => {
  console.log(`Server en puerto ${app.get("port")}`);
});