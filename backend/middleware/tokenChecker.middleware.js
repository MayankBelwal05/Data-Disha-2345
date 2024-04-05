

const tokenChecker = (req,res,next) => {
    const token = req.headers.authorization;
    try{
        if(token){
            const blackListedToken = 
        }
    }
    catch(err){
        res.status(400).json({err})
    }
}