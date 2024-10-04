import express from 'express'
import {registerController,loginController} from '../controllers/authControllers.js'


const authRoutes = express.Router();

//routes
//REGISTER || POST
authRoutes.post("/register", registerController);

// LOGIN || POST
authRoutes.post("/login", loginController);

export {authRoutes}
