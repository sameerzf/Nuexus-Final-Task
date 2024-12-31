const {Schema,model} = require('mongoose');

const userSchema = new Schema({
name:{type:String,required:true},
email:{type:String,required:true},
phone:{type:String},
address:{type:String},
bio:{type:String},
password:{type:String,required:true},
purchasedCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course'  // to add course user.purchasedCourses.push(courseId);
    }
  ],

})

module.exports = model('User',userSchema);