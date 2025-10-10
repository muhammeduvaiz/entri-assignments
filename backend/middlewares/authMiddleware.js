const authMiddleware = (req,res,next) => {
    if(req.query){
        if(req.query.token== "validToken"){
            next(); // Proceed to the next middleware or route handler
        }else {
            res.status(401).json({
                success: false,
                message: "Unauthorized access",
                statusCode: 401
            });
            // throw new Error("Unauthorized: Invalid token");
        }
    }else {
        res.status(400).json({
            success: false,
            message: "Bad Request: Token is missing",
            statusCode: 400
        });
    }
}
module.exports = authMiddleware;