import express from "express"
import colors from 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
import {connectDb} from './config/db.js'
import {authRoutes} from './routes/authRoutes.js'
import {categoryRoutes} from './routes/catgeoryRoutes.js'
import {foodRoutes} from './routes/foodRoutes.js'
import {resturantRoutes} from './routes/resturantRoutes.js'
import {testRoutes} from './routes/testRoutes.js'
import {userRoutes} from './routes/userRoutes.js'

//dot en configuration
dotenv.config();

//DB connection
connectDb();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());


//route
// URL => http://localhost:8080

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/food', foodRoutes);
app.use('/api/v1/resturant', resturantRoutes);
app.use('/api/v1/test', testRoutes);
app.use('/api/v1/user', userRoutes);

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to Food Server APP API BASE PROJECT </h1>");
});

//PORT
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.white.bgMagenta);
});
