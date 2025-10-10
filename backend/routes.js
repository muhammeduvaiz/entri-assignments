const authMiddleware = require('./middlewares/authMiddleware');
const { addUser, getUsers, userLogin } = require('./userControlle');
const { addProdect, updateProdect, getProdects, updateMongProdect, deleteProdect, deletedFromDatabase } = require('./userController');

const router = require('express').Router();

router.get('/health',(req,res) => {
    console.log("api call");

    res.status(200).json({
        success: true,
        message: "Hello World from Express API",
        statusCode: 200

    });
});

router.get('/users', authMiddleware,(req,res)=>{

    console.log("users API called");
    const users = [
         {id:1, name: "uvaiz", age : 25},
         {id:2, name: "john", age : 30},
         {id:3, name: "doe", age : 28} 
     ]
    res.status(200).json({
        success:true,
        message: "List of users",
        statusCode:200,
        count: users.length,
        data: users
    })
})

router.post('/addUser', (req, res) => {
console.log("addUser API called");
   
    // Here you would typically handle the request body, e.g., save user data to a database
    
    if(req.body?.user){
        console.log(req.body.user);
        res.status(201).json({
            success: true,
            message: "User added successfully",
            statusCode: 201
        });

    } else {
        res.status(400).json({
            success: false,
            message: "User data is missing",
            statusCode: 400
        });
    }
});

router.delete('/deleteUser', (req, res) => {
    console.log("deleteUser API called");
    console.log(req.query);
    // Here you would typically handle the request body, e.g., delete user data from a database
    
    res.status(200).json({
        success: true,
        message: "User deleted successfully",
        statusCode: 200,
        query: req.query
    });
});
 
//prodect routes
router.post('/addProdect', authMiddleware,addProdect);
router.put('/updateProdect',authMiddleware,updateProdect)
router.post('/addProdect',authMiddleware,addProdect);
router.get('/getProdects',authMiddleware,getProdects);
router.put('/updateMongProdect',authMiddleware,updateMongProdect);
router.delete('/deleteProdect',authMiddleware,deleteProdect);
router.delete('/deleteFromDatabase',authMiddleware,deletedFromDatabase);

//user routes
router.post('/adddUser',authMiddleware,addUser);
router.get('/getUsers',authMiddleware,getUsers);
router.post('/userLogin',authMiddleware,userLogin);
module.exports = router;