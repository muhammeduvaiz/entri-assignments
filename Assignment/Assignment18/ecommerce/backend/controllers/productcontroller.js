const ProductModel = require("../schema/productSchema")

module.exports = {
    addProduct: (req, res) => {
        try {
            const { name, price, description, image } = req.body
            if (name && price && description && image) {
                const newProduct = new ProductModel({
                    name,
                    price,
                    description,
                    image
                })
                newProduct.save()
                    .then((response) => {
                        console.log(response)
                        res.status(201).json({
                            message: "Product added successfully",
                            data: response,
                            success: true
                        })

                    })
                    .catch((error) => {
                        console.log(error)
                        res.status(500).json({
                            message: error.message,
                            success: false
                        })
                    })
            } else {
                res.status(400).json({
                    message: "All fields are required",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: error.message,
                success: false
            })
        }
    },
    getProduct: async (req, res) => {
        try {
            const product = await ProductModel.find({
                isDeleted: false
            }).lean()
            res.status(200).json({
                message: "Product fetched successfully",
                data: product,
                success: true,
                count: product.length
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: error.message,
                success: false
            })
        }
    },
    deleteProduct: (req,res)=>{
        try{
            const {name} = req.query
            if(name){
                ProductModel.findOneAndUpdate({name : name},{
                    $set : {
                        isDeleted : true
                    }
                })
                .then((response)=>{
                    console.log(response)
                    res.status(200).json({
                        message: "Product deleted successfully",
                        data: response,
                        success: true
                    })
                })
                .catch((error)=>{
                    console.log(error)
                    res.status(500).json({
                        message: error.message,
                        success: false
                    })
                })
            }else{
                res.status(400).json({
                    message: "All fields are required",
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error.message,
                success: false
            })
        }
    },
    updateProduct: (req,res)=>{
        try{
            const {name,updatedData} = req.body
            if(name){
                ProductModel.updateOne({
                    name : name
                },updatedData)
                .then((response)=>{
                    console.log(response)
                    res.status(200).json({
                        message: "Product updated successfully",
                        data: response,
                        success: true
                    })
                })
                .catch((error)=>{
                    console.log(error)
                    res.status(500).json({
                        message: error.message,
                        success: false
                    })
                })
            }else{
                res.status(400).json({
                    message: "All fields are required",
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error.message,
                success: false
            })
        }
    }
}