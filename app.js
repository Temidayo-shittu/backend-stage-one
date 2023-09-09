require('dotenv').config()
require('express-async-errors')
const express= require('express')
const app= express()
//Database
const connectDB=  require('./db/connect')
const backendRouter= require('./routes/backendRoute')
//Middleware
const notFoundMiddleware= require('./middleware/not-found')
const errorHandlerMiddleware= require('./middleware/error-handler')

app.use(express.json())

app.use('/',(req,res)=>{
    res.send('HNG BACKEND STAGE 1')
})

app.use(backendRouter);
//app.use(notFoundMiddleware)
//app.use(errorHandlerMiddleware)



const port= process.env.PORT || 5000

const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
