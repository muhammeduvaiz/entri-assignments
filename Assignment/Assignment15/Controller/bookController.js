const bookModel = require('../SchemaModel/bookSchema');
module.exports = {
    addBooks:(req,res)=>{
        try{
            const {title,price,author,stock} = req.body;
            if(title && price && author && stock){
                const newBook = new bookModel({
                    title,
                    price,
                    author,
                    stock,
                    isActive: true,
                    isDeleted: false
                })
                newBook.save()
                .then((response)=>{
                    return res.status(201).json({
                        success: true,
                        message: "Book added successfully",
                        statusCode: 201,
                        data: response
                    });
                })
                .catch((error)=>{
                    return res.status(400).json({
                        success: false,
                        message: "Missing required fields",
                        statusCode: 400
                    });
                });
            }else{
                return res.status(400).json({
                    success: false,
                    message: "Missing required fields",
                    statusCode: 400
                });
            }
        }catch(error){
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
                statusCode: 500
            });
        }
    },
    getBooks:async (req,res)=>{
        try{
            const books = await bookModel.find({isDeleted:false}).sort({ price: 1 });
            return res.status(200).json({
                success: true,
                message: "Books fetched successfully",
                statusCode: 200,
                count: books.length,
                data: books
            });
        }catch(error){
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
                statusCode: 500
            });
        }

    },
    updateBooks:(req,res)=>{
        try{
            const {bookTitle, updatedData} = req.body;
            if(bookTitle){
                bookModel.updateOne({title:bookTitle},updatedData)
                .then((response)=>{
                    console.log(response);
                    console.log(updatedData);
                    return res.status(200).json({
                        success: true,
                        message: "Book updated successfully",
                        statusCode: 200,
                        data: updatedData,
                        count: response.modifiedCount
                    });
                })
                .catch((error)=>{
                    return res.status(400).json({
                        success: false,
                        message: "Book updating failed",
                        statusCode: 400
                    });
                });
            }else{
                return res.status(400).json({
                    success: false,
                    message: "Missing required fields",
                    statusCode: 400
                });
            }
        }catch(error){
            console.log(error);
            return res.status(400).json({
                success: false,
                message: "Book updating failed",
                statusCode: 400
            });
        }
    },   
    deleteBooks:(req,res)=>{
        try{
            const {bookTitle} = req.query;
            if(bookTitle){
                bookModel.updateOne(
                    {title:bookTitle},
                    {
                        $set:{isDeleted:true}
                    }
                )
                .then((response)=>{
                    return res.status(200).json({
                        success: true,
                        message: "Book deleted successfully",
                        statusCode: 200,
                        data: response
                    });
                })
                .catch((error)=>{
                    return res.status(400).json({
                        success: false,
                        message: "Book deleting failed",
                        statusCode: 400
                    });
                });
            }else{
                return res.status(400).json({
                    success: false,
                    message: "Missing required fields",
                    statusCode: 400
                });
            }
        }catch(error){
            console.log(error);
            return res.status(400).json({
            success: false,
                message: "Book deleting failed",
                statusCode: 400
            });
        }
    },
    hardDeleteBooks:(req,res)=>{
        try{
            const {bookTitle}= req.query;
            if(bookTitle){
                bookModel.deleteOne(
                    {title:bookTitle}
                )
                .then((response)=>{
                    return res.status(200).json({
                        success: true,
                        message: "Book deleted successfully",
                        statusCode: 200,
                        data: response
                    });
                })
                .catch((error)=>{
                    return res.status(400).json({
                        success: false,
                        message: "Book deleting failed",
                        statusCode: 400
                    });
                });
            }else{
                return res.status(400).json({
                    success: false,
                    message: "Missing required fields",
                    statusCode: 400
                });
            }
        }catch(error){
            console.log(error);
            return res.status(400).json({
                success: false,
                message: "Book deleting failed",
                statusCode: 400
            });
        }
    },
    getBooksByPrice:async (req,res)=>{
        try{
            const books = await bookModel.aggregate([
                {
                    $match:{
                        isDeleted: false,
                        price:{
                            $gte:10,
                            $lte:20
                        }
                    }
                },
                {
                    $sort:{
                        price:1
                    }
                }
            ]);
            return res.status(200).json({
                success: true,
                message: "Books fetched successfully",
                statusCode: 200,
                count: books.length,
                data: books
            });
        }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal Server Error",
                statusCode: 500
            });
        }
    },
}