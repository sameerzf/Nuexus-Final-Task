const {Schema,model} = require('mongoose');

const courseSchema = new Schema({
title:{type:String,required:true},
description:{type:String,required:true},
instructor:{type:String,required:true},
img:{type:String}
})

module.exports = model('Course',courseSchema);