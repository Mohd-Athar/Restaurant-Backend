import express from 'express'
import { testUserController } from "../controllers/testController.js"

//router object
const testRoutes = express.Router();

//routes GET | POST |UPDATE | DELETE
testRoutes.get("/test-user", testUserController);

//export
export  {testRoutes}
