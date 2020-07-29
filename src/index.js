const express= require("express");
const app = express();
const morgan = require("morgan");


//configuraciones

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended : false}));
app.use(express.json());

//empezar servidor
app.listen(3000 , () => {
  console.log(`Server en puerto ${3000}`);
});