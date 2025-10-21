const authMiddleware = (req, res, next) => {
    if(req.query){
        if(req.query.token === 'myToken'){
            next();
        } else {
            res.status(200).json({
                success: false,
                statuscode: 401,
                message: "Not Authorized token is invalid",
                data: null
            })
        }
    }else{
        res.status(200).json({
            success: false,
            statuscode: 401,
            message: "Not Authorized token is missing",
            data: null
        })
    }
}

module.exports = authMiddleware;