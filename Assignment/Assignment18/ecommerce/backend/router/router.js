const { addProduct,getProduct,deleteProduct,updateProduct } = require("../controllers/productcontroller")
const { adminsignup } = require("../controllers/adminController")
const router = require("express").Router()

router.post("/addproduct",addProduct)
router.get("/getproduct",getProduct)
router.delete("/deleteproduct",deleteProduct)
router.put("/updateproduct",updateProduct)

//AdminLogin
router.post("/adminsignup",adminsignup)

module.exports = router