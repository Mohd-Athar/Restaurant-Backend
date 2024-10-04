import express from 'express'
import {authMiddleware} from '../middlewares/authMiddleware.js'
import {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} from "../controllers/resturantController.js"

const resturantRoutes = express.Router();

//routes
// CRAETE RESTURANT || POST
resturantRoutes.post("/create", authMiddleware, createResturantController);

// GET ALL RESTURANTS || GET
resturantRoutes.get("/getAll", getAllResturantController);

// GET RESTURANT BY ID || GET
resturantRoutes.get("/get/:id", getResturantByIdController);

// DELETE RESTURANT || DELETE
resturantRoutes.delete("/delete/:id", authMiddleware, deleteResturantController);

export {resturantRoutes}
