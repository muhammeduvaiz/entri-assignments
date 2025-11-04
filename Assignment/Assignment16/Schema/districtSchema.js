const mongoose =require('mongoose');
const districtSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    population:{
        type:String,
        required:true
    },
    state_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'State',
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
const districtModel = mongoose.model('District', districtSchema);
module.exports = districtModel;