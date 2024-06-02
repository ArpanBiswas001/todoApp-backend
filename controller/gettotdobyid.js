const todo=require('../models/Todo')

exports.gettodoid=async(req,res)=>{
    try {
        const id=req.params.id
        const todoid=await todo.findById({_id:id})
        if(!todoid){
            return res.status(404).json({
                sucess:false,
                msg:'not found'
            }) 
        }
        res.status(200).json({
            sucess:true,
            data:todoid,
            msg:'data fetched succesfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            sucess:false,
            data:'sever error',
            msg:'data fetched unsuccesfully'
        })
    }
}