

const db =require("../database")

let creatdefult = (cb) => {
  db.parkdata.insertMany([{numpark: "1", status: true},
   { numpark: "2",status: false},
   { numpark: "3", status: false},
    {numpark: "4", status: false},
    {numpark: "5", status: false},
   { numpark: "6",status: false},
   { numpark: "7",status: false},
   { numpark: "8",status: false},
   { numpark: "9",status: false}],
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}

///////hala
let getallpark = (cb) => {

  db.parkdata.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      console.log("data:", data);
      cb(data);
    }
  });
  }



    ///////roaa
    let getfalse = (cb) => {
      db.parkdata.find({status:false}, (err, data) => {
        if (err) {
          cb(err);
        } else {
          console.log("data:", data);
          cb(data);
        }
      });
    };




   let  updatepark = (cb,isvalid,status) => {
      db.parkdata.updateOne( {numpark:isvalid} ,  { $set: { status: status }}, (err, data) => {
        if (err) {
          cb(err);
        } else {
          console.log("data:", data);
          getallpark(cb);
        }
      });
    };









  // let creatpark = (cb) => {
  //   db.userdata.create({ numpark: 2,
      // status: true},
  //      (err, data) => {
  //     if (err) {
  //       cb(err)
  //     } else {
  //       cb(data)
  //     }
  //   })
  // }




 


  module.exports = {
    /////hala
    getallpark,
    //creatpark,
    creatdefult,
////roaa
    getfalse,
    updatepark
   
  }