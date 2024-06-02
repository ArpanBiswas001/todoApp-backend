const todo=require('../models/Todo')

exports.updatetodo=async(req,res)=>{
    try {
        const {id}=req.params;
        const {title,description}=req.body
        const todoid=await todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()}
        )
        res.status(200).json({
            sucess:true,
            data:todoid,
            msg:'data updated succesfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess:false,
            data:'sever error',
            msg:'data updated unsuccesfully'
        })
    }
}