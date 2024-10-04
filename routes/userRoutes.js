import express from 'express'
import {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} from "../controllers/userController.js" 
import {authMiddleware} from "../middlewares/authMiddleware.js"

const userRoutes = express.Router();

//routes
// GET USER || GET
userRoutes.get("/getUser", authMiddleware, getUserController);

// UPDATE PROFILE
userRoutes.put("/updateUser", authMiddleware, updateUserController);

//password update
userRoutes.post("/updatePassword", authMiddleware, updatePasswordController);

// RESET PASSWORD
userRoutes.post("/resetPassword", authMiddleware, resetPasswordController);

// delete USER
userRoutes.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

export  {userRoutes}
