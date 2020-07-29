const{Router} = require("express");
const router = Router();

router.get("/", (req , res) =>{
    const data = {
      "nombre" : "Facundo",
    };
    res.json(data);
})

module.exports = router;
