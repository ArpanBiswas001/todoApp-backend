const mongoose=require('mongoose')
require('dotenv').config()

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log('succesfully database connected');})
    .catch((error)=>{
        console.log('error occured');
        console.error(error.message);
        process.exit(1)
    })
}
module.exports=dbConnect