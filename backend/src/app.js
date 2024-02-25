import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import postsRouter from './routes/posts.routes.js'
import usersRouter from './routes/users.routes.js'
import authRouter from './routes/auth.routes.js'
const app = express()
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    }
))

app.use(express.json({limit: '20kb'}))
app.use(express.urlencoded({extended: true,limit: '20kb'}))
app.use(express.static("public"))
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/users",usersRouter)
app.use("/api/posts",postsRouter)

export default app;