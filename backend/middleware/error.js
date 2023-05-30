exports.errorhandle=(err,req,res,next)=>{
    err.status=err.status||500;
    err.message=err.message||"internal server error";
 
        //mongodb wrong id error
       if(err.name==="CastError"){
        err.message=`Resources not found ${err.path}`
        err.status=400;
       }

    res.status(err.status).json({
        sucess:false,
        message:err.message
    })
}