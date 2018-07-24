var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var data = require('../models/data');

mongoose.connect('mongodb://127.0.0.1:27017/data')

mongoose.connection.on("connected",function () {
  console.log("连接成功");
});

mongoose.connection.on("erro",function () {
  console.log("连接失败");
});

mongoose.connection.on("disconnected",function () {
  console.log("连接断开");
});

router.get("/",function (req,res,next) {
  data.find({},function (err,doc) {
      if(err){
        res.json({
          "status":1,
          "msg":"error"
        })
      }else{
        res.json({
          "status":0,
          "msg":"good",
          "length":doc.length,
          "list":doc
        })
      }
  });
});
module.exports = router;
