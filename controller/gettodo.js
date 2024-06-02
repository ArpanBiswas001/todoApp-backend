const todo=require('../models/Todo')

exports.gettodo=async(req,res)=>{
    try {
        const todos=await todo.find({})

        res.status(200).json({
            sucess:true,
            data:todos,
            msg:'data fetched succesfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess:false,
            data:'sever error',
            msg:'data fetched succesfully'
        })
    }
}