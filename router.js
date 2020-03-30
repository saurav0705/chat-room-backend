const express = require("express");
const router = express.Router();
const mock = require('./mock.json');
const {getAll,getRooms} = require('./users');
router.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});
router.get("/users",(req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-type','application/json');
  res.json({"users":getAll()});
})

router.get("/rooms",(req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-type','application/json');
  res.json(getRooms());
})


router.get('/mock-data',(req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-type','application/json');
  res.json(mock);
})

module.exports = router;