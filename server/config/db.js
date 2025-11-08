import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined');
        }
        mongoose.connection.on('connected', () => console.log("Database Connected"));
        mongoose.connection.on('error', (err) => console.error("Mongo error:", err.message));
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'blogwithai'
        });
    } catch (error) {
        console.log(error.message);
        throw error;
    }
};
export default connectDB;
