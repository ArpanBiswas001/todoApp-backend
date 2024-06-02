const todo=require('../models/Todo')

exports.deletetodo=async(req,res)=>{
    try {
        const {id}=req.params;
        
        await todo.findByIdAndDelete({_id:id})
        res.status(200).json({
            sucess:true,
            msg:'data deleted succesfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess:false,
            data:'sever error',
            msg:'data deleted unsuccesfully'
        })
    }
}