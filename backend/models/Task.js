const mongoose = require('mongoose');

const TaskSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    priority:{
        type:String,
        enum:["low","medium","high"],
        default:"medium"
    },
    deadline:{
        type:Date,
        required:false
    },
    completed:{
        type:Boolean,
        default:false
    },
   createdAt:{
        type:Date,
        default:Date.now,
    }
    
}
);

module.exports=mongoose.model("Task",TaskSchema);