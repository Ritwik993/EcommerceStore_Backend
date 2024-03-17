require('dotenv').config();
const app=require('./app');
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at port ${process.env.PORT}`);
})
