const express=require('express')
const mongoose=require('mongoose')
const app=express()
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')
const categoriesRoute=require('./routes/categories')
const multer=require('multer')

const dotenv=require('dotenv')

dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
    useUnifiedTopology:true
})
.then(()=>console.log('Connected to db'))
.catch((err)=>console.log(err))


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'images')
    },filename:(req,file,cb)=>{
        cb(null,'cat.jpeg')
    }
})

const upload=multer({storage:storage})

app.post('/api/upload',upload.single('file'),(req,res)=>{
    res.status(200).json('Post has been uploaded')
})

app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/posts',postRoute)
app.use('/api/categories',categoriesRoute)

app.listen('5000',()=>{
    console.log('Server is listening')
})