const express = require("express");
const router = express.Router();
const {getAll} = require('./users');
router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});
router.get("/users",(req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-type','application/json');
  res.json(getAll());
})
module.exports = router;