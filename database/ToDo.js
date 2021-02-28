const mongoose=require('./connect');

const ToDo={
    name:String,
    description:String,
    date:Date,
    hour:String,
    done:Boolean
};

const modelToDo=mongoose.model('ToDo',ToDo);

module.exports=modelToDo;