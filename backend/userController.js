const ProdectModel = require("./models/prodectModels");

const prodects = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
    }
];

module.exports = {
    // Add product to local array
    addProdect: (req, res) => {
        try {
            console.log("api call : ", req?.body);

            prodects.push(req.body);
            console.log("Products after addition: ", prodects);
            res.status(200).json({
                success: true,
                message: "Product added successfully",
                statusCode: 200,
                data: req.body
            });
        } catch (error) {
            console.error("Error in addProdect:", error);
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                statusCode: 500
            });
        }
    },

    // Update product in local array
    updateProdect: (req, res) => {
        try {
            console.log("reqbody: ", req?.body);

            const prodectIndex = prodects.findIndex(p => p.id === req.body.id);
            if (prodectIndex === -1) {
                return res.status(404).json({
                    success: false,
                    message: "Product not found",
                    statusCode: 404
                });
            } else {
                prodects[prodectIndex] = req.body.updatedData;
                console.log("Products after update: ", prodects);
                res.status(200).json({
                    success: true,
                    message: "Product updated successfully",
                    statusCode: 200,
                    data: req.body
                });
            }
        } catch (e) {
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                statusCode: 500
            });
        }
    },

    // Add product to MongoDB
    addMongoProdect: (req, res) => {
        try {
            const { name, price, size } = req.body;
            if (name && price && size) {
                const newProdect = new ProdectModel({
                    name,
                    price,
                    size,
                });
                newProdect.save()
                    .then((response) => {
                        console.log("Product saved successfully:", response);
                        res.status(201).json({
                            success: true,
                            message: "Product added successfully",
                            statusCode: 201,
                            data: response
                        });
                    })
                    .catch((error) => {
                        console.error("Error saving product:", error);
                        res.status(500).json({
                            success: false,
                            message: "Internal Server Error",
                            statusCode: 500
                        });
                    });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Missing required fields",
                    statusCode: 400
                });
            }
        } catch (e) {
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                statusCode: 500
            });
        }
    },

    // Get products from MongoDB
    getProdects: async (req, res) => {
        try {
            const prodects = await ProdectModel.find({ size: "M" });
            return res.status(200).json({
                success: true,
                message: "List of products",
                statusCode: 200,
                count: prodects.length,
                data: prodects
            });
        } catch (error) {
            console.error("Error in getProdects:", error);
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                statusCode: 500
            });
        }
    },

    // Update product in MongoDB
    updateMongProdect: (req, res) => {
        try {
            const { prodectId, updatedData } = req.body;
            if (prodectId) {
                ProdectModel.updateOne(
                    { _id: prodectId },
                    updatedData
                ).then((response) => {
                    console.log("Product updated successfully:", response);
                    res.status(200).json({
                        success: true,
                        message: "Product updated successfully",
                        statusCode: 200,
                        data: response
                    });
                }).catch((error) => {
                    console.error("Error updating product:", error);
                    res.status(500).json({
                        success: false,
                        message: "Internal Server Error",
                        statusCode: 500
                    });
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Missing product ID",
                    statusCode: 400
                });
            }
        } catch (e) {
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                statusCode: 500
            });
        }
    },

    // Soft delete product in MongoDB
    deleteProdect: (req, res) => {
        try {
            const { prodectId } = req.body;
            if (prodectId) {
                ProdectModel.updateOne(
                    { _id: prodectId },
                    {
                        $set: {
                            isDeleted: true,
                            deletedAt: new Date()
                        }
                    }
                ).then((response) => {
                    console.log("Product deleted successfully:", response);
                    res.status(200).json({
                        success: true,
                        message: "Product deleted successfully",
                        statusCode: 200,
                        data: response
                    });
                }).catch((error) => {
                    console.error("Error deleting product:", error);
                    res.status(500).json({
                        success: false,
                        message: "Internal Server Error",
                        statusCode: 500
                    });
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Missing product ID",
                    statusCode: 400
                });
            }
        }
        catch (e) {
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                statusCode: 500
            });
        }
    },
    //hard-Delete
    deletedFromDatabase: async (req, res) => {
        try {
            const { prodectId } = req.body;
            if (prodectId) {
                // Await the delete operation and store the response
                const response = await ProdectModel.deleteOne({ _id: prodectId });
                console.log("response: ", response);

                if (response.deletedCount !== 0) {
                    return res.status(200).json({
                        success: true,
                        message: "Product deleted successfully",
                        statusCode: 200,
                        data: response
                    });
                } else {
                    return res.status(404).json({
                        success: false,
                        message: "Product not found",
                        statusCode: 404
                    });
                }
            } else {
                return res.status(400).json({
                    success: false,
                    message: "prodectId is required",
                    statusCode: 400
                });
            }
        } catch (e) {
            console.error("Error in deletedFromDatabase:", e);
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                statusCode: 500
            });
        }
    }
};