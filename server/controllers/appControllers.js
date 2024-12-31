const bcrypt = require('bcryptjs')
const User = require('../models/userModel')
const Course = require('../models/courseModel')
const jwt = require('jsonwebtoken')
const path = require('path');
const {v4:uuid} = require('uuid');
const HttpError = require('../models/errorModel');

const registerUser = async(req,res,next)=>{
    try {
        const {name,email,password,password2} = req.body;
    
        if(!name || !email || !password){
            return next(new HttpError('Fill in all fields',422));
        }
        const newEmail = email.toLowerCase();
        const emailExists = await User.findOne({email:newEmail});
        if(emailExists){
            return next(new HttpError("Email already Exists",422))
        }
    
        if((password.trim()).length<6){
            return next(new HttpError("Password should be at least 6 characters", 422))
        }
    
        if(password!=password2){
             return next(new HttpError("Passwords do not match",422))
        } 
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
    
        const newUser = await User.create({
            name,email:newEmail,password: hashedPassword
        })
        res.status(201).json(`New User ${newUser.email} registered`)
        } catch (error) {
            console.log(error);
            return next(new HttpError('User Registration failed',422))
        }
}

const loginUser = async(req,res,next)=>{
    try {
     const {email,password} = req.body;
     if(!email || !password){
         return next(new HttpError("Fill in all the fields",422))
     }
     const newEmail = email.toLowerCase();
     const user = await User.findOne({email:newEmail});
     if(!user){
         return next(new HttpError("Invalid Credentials",422))
     }
 
     const comparePass = await bcrypt.compare(password,user.password);
     if(!comparePass){
         return next(new HttpError("Invalid credentials",422));
     }
 
     const {_id:id,name} = user;
     const token = jwt.sign({id,name},JWT_SECRET
        ,{expiresIn:"1d"});
 
     res.status(200).json({token,id,name})
 
     // in frontend currentUser state will have these three fields token id and name because response is send to front end
 
 
    } catch (error) {
        console.log(error);
     return next(new HttpError("Login failed. Please cheeck your credentials",422))
    }
 }
 // Profile 
// post request and path is api/users/:id
//protected

const getUser = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const user = await  User.findById(id).select('-password');

        if(!user){
            return next(new HttpError("User not found",404))
        }
        res.status(200).json(user);

    } catch (error) {
        return next(new HttpError("Unable to retrieve user",422))
    }
}
const createCourse = async(req,res,next)=>{
    try{
        let {title,description,instructor}= req.body;

        const newCourse= await Course.create({
            title,description,instructor
        })

        if(!newCourse){
            return next( new HttpError("Course can not be created",422))
        }

        res.status(201).json(newCourse);

    }
catch(err){
    console.log(err);
    return next(new HttpError(err))
}
  

}

const getCourses = async (req,res,next) =>{
    try{
        const courses = await Course.find().sort({updatedAt: -1});
       res.status(200).json(courses);
    }
    catch(err){
        console.log(err);
        return next(new HttpError(err))

    }
   
}


module.exports = {registerUser,loginUser,getUser,createCourse,getCourses};
