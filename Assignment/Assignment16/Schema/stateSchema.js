const mongoose =require('mongoose');
const stateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    population:{
        type:Number,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true});
const stateModel = mongoose.model('State', stateSchema);
module.exports = stateModel;