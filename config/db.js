import mongoose from 'mongoose'
import colors from 'colors'
import { DB_NAME } from '../constant.js';

//function mmongodb dfatabase connection
const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
    console.log(`Connected To Database ${mongoose.connection.host} `.bgWhite);
  } catch (error) {
    console.log("DB Error", error);
  }
};
export {connectDb}
