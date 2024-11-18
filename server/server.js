import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import FacebookLoginRouter from './routes/FacebookLoginRouter.js'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/facebook-login-url', FacebookLoginRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})