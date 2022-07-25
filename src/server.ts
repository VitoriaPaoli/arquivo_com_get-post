import express from "express"
import mainRouter from './routes/index'
import mustache from 'mustache-express'
import path from "path"
import dotenv from 'dotenv'

dotenv.config()

const server = express()

server.set('view engine', 'mustache')
server.set('views',path.join(__dirname, 'views'))

server.engine('mustache',mustache())

// habilitando o metodo post
server.use(express.urlencoded({extended:true}))

server.use(mainRouter)


// arrumar o servidor e colocar PORT
server.listen(process.env.PORT)






