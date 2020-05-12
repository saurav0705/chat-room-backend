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
});

router.get('/mock-json',(req,res)=>{
  let obj = {
    "odd":[],
    "even":[],
    "fibbonaci":[],
    "factorial":[]
}

  let promises = Object.keys(obj).map( key => {
  for(let i=0;i<parseInt(Math.random()*100);i++){
    obj[key].push(parseInt(Math.random()*100));
  }
  return obj;
  
})
Promise.all(promises).then(function () {
  res.statusCode=200;
  res.setHeader('Content-type','application/json');
  res.json(obj)
});
})

module.exports = router;