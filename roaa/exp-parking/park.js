const express = require("express");
const cors = require("cors");

var router = express.Router();


const mongo =require ("../db-parking/parkdb")



/////////////////////
router.get('/', (req, res) => {
  res.send("park router");
});


router.get('/defult', (req, res) => {
  mongo.creatdefult((result) => {
    res.json(result);
  })
});

////roaa//////
router.get('/false', (req, res) => {
  console.log("dfghgf")
  mongo.getfalse((result) => {
    res.json(result);
  })
});



/////////roaa
router.put('/false/:isvalid/:status', (req, res) => {

  let isvalid = encodeURIComponent(req.params.isvalid);
  let status = encodeURIComponent(req.params.status);
  console.log("update",isvalid,status);
  console.log("update",typeof isvalid,typeof status)

  mongo.updatepark((result) => {
    res.json(result);
  },isvalid,status)
});







/////////hala
router.get('/all', (req, res) => {
  mongo.getallpark((result) => {
    res.json(result);
  })  });
  











module.exports = router;









