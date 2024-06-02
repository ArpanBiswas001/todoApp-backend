const todo=require('../models/Todo')

exports.createtodo=async(req,res)=>{
    try {
        const {title,description}=req.body
        const response=await todo.create({title,description})
        res.status(200).json({
            success:true,
            data:response,
            msg:'Entry created succesfully'
        })
    } catch (error) {
        console.log(error);
        console.error();
        res.status(500).json({
            success:false,
            data:'Internal serve error',
            msg:error.msg
        })
    }
}