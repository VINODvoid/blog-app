import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import postsRouter from './routes/posts.routes.js'
import usersRouter from './routes/users.routes.js'
import authRouter from './routes/auth.routes.js'
import multer from 'multer'
const app = express()
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }
))

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"../../frontend/public/images")
    },
    filename: (req,file,cb) => {
        cb(null, Date.now()+file.originalname)
    }
})

const upload = multer({storage})

app.post("/api/upload",upload.single("file"),(req,res) => {
    const file = req.file;
    res.status(200).json(file.filename)
})


app.use(express.json({limit: '20kb'}))
app.use(express.urlencoded({extended: true,limit: '20kb'}))
app.use(express.static("public"))
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/users",usersRouter)
app.use("/api/posts",postsRouter)

export default app;