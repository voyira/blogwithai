import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js';
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from './routes/blogRoutes.js';

const app = express();

await  connectDB()

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("api working bro");
})
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const PORT =process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("server is running on PORT"+ PORT);
})
export default app;
