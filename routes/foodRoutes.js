import express from 'express'
import {authMiddleware} from '../middlewares/authMiddleware.js'
import {adminMiddleware} from '../middlewares/adminMiddleware.js'
import {
  createFoodController,
  getAllFoodsController,
  getSingleFoodController,
  getFoodByResturantController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  orderStatusController,
} from '../controllers/foodController.js'

const foodRoutes = express.Router();

//routes
//CREATE FOOD
foodRoutes.post("/create", authMiddleware, createFoodController);

//GET ALL FOOD
foodRoutes.get("/getAll", getAllFoodsController);

// GET SINGLE FOOD
foodRoutes.get("/get/:id", getSingleFoodController);

// GET  FOOD by rest
foodRoutes.get("/getByResturant/:id", getFoodByResturantController);

// UPDATE FOOD
foodRoutes.put("/update/:id", authMiddleware, updateFoodController);

// DELETE FOOD
foodRoutes.delete("/delete/:id", authMiddleware, deleteFoodController);

// PLACE ORDER
foodRoutes.post("/placeorder", authMiddleware, placeOrderController);

// ORDER STATUS
foodRoutes.post(
  "/orderStatus/:id",
  authMiddleware,
  adminMiddleware,
  orderStatusController
);

export {foodRoutes}
