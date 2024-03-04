var Express=require("express");
var MongoClient=require("mongodb").MongoClient;
var cors=require("cors");
var multer=require("multer");

var app=Express();
app.use(cors());

var Connection_String="mongodb+srv://admin:admin@deepcluster.1byh9a4.mongodb.net/?retryWrites=true&w=majority"

