import express from "express"
import mongoose  from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"

dotenv.config();

mongoose.connect(
    process.env.MONGO
)
.then(()=> {
    console.log("conectada db")
}).catch(err => {
    console.log(err)
})

const app = express()

app.listen(3000, ()=> {
    console.log("Funcionando en puerto 3000")
})

// probando registro usuarios
app.use('/api/user', 
    userRoutes
)