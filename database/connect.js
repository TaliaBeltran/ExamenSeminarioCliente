const mongoose=require('mongoose');

mongoose.connect('mongodb://172.29.0.2:27017/examenSeminario');

module.exports=mongoose;