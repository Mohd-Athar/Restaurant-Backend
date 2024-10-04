import express from 'express'
import {authMiddleware} from '../middlewares/authMiddleware.js'
import {
  createCatController,
  getAllCatController,
  updateCatController,
  deleteCatController} from '../controllers/categoryController.js'


const categoryRoutes = express.Router();

//routes
// CREATE CAT
categoryRoutes.post("/create", authMiddleware, createCatController);

//GET ALL CAT
categoryRoutes.get("/getAll", getAllCatController);

// UPDATE CAT
categoryRoutes.put("/update/:id", authMiddleware, updateCatController);

// DLEETE CAT
categoryRoutes.delete("/delete/:id", authMiddleware, deleteCatController);

export {categoryRoutes}
