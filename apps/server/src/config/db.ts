import mongoose, { ConnectOptions } from "mongoose"
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI || '';
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions);

        console.log(colors.cyan.underline(`MongoDB Atlas Successfully Connected : ${conn.connection.host}`));
    } catch (error: any) {
        console.log(colors.red.bold(error.message));
        process.exit(1);
    }
}

export default connectDB;