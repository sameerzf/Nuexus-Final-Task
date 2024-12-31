const {Router} = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const {registerUser,loginUser,getUser,createCourse,getCourses} = require('../controllers/appControllers')

const router = Router();
router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/user/:id',getUser);
router.post('/createCourse',createCourse)
router.get('/courses',getCourses)
module.exports = router;
