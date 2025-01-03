const express= require('express')
const cors = require('cors')

const {connect} = require('mongoose')
const routes = require('./routes/appRoutes')

const app = express();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors({credentials:true,origin:"http://localhost:5173"}));
app.use('/api/routes',routes);

connect(URI).then(
    app.listen(5000,()=>{
    console.log("Server running")
})).catch(error=>console.log(error))
