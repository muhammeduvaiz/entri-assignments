const UserModel = require("./models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    addUser: async (req,res) => {
    try {
            const { name, username, age, gender, email, password } = req.body;
            if (name && username && age && gender && email && password) {
                const encryptedPassword = await bcrypt.hash(password, 10); // Use await with bcrypt.hash
                const newUser = new UserModel({
                    name, 
                    username, 
                    email,
                    age, 
                    gender,
                    password: encryptedPassword
                });
                newUser.save()
                    .then((response) => {
                        console.log("User saved successfully:", response);
                        res.status(201).json({
                            success: true,
                            message: "User added successfully",
                            statusCode: 201,
                            data: response
                        });
                    })
                    .catch((error) => {
                        console.error("Error saving User:", error);
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
    getUsers: async (req,res) => {
        try{
            // Aggregate pipeline: match age >= 18, sort by gender, limit 2, project fields, lookup userDetails
            const users = await UserModel.aggregate([
                {
                    $match: {
                        age: { $gte: 18 }
                    }
                },
                {
                    $sort: { gender: 1 }
                },
                {
                    $limit: 2
                },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        username: 1,
                        age: 1,}
                    },
                    {
                        $lookup: {
                            from: "users",
                            localField: "_id",
                            foreignField: "_id",
                            as: "userDetails"
                        }
                    }
                
            ]);
            res.status(200).json({
                success: true,
                message: "List of users",
                statusCode: 200,
                count: users.length,
                data: users
            });
            console.log("Users fetched successfully:", users);
        } catch (e) {
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                statusCode: 500
            });
        }
    },
    userLogin: async (req, res) => {
        try{
            const {username, password} = req.body;
            if (username && password) {
                // Find user by username (not email, since you receive username)
                const userFound = await UserModel.findOne({ username: username });
                if (userFound) {
                    const isPasswordMatch = await bcrypt.compare(password, userFound.password);
                    if (isPasswordMatch) {
                        delete userFound.password; // Remove password from response
                        res.status(200).json({
                            success: true,
                            message: "Login successful",
                            statusCode: 200,
                            data: {
                                userId: userFound._id,
                                name: userFound.name,
                                username: userFound.username
                            }
                        });
                    } else {
                        res.status(401).json({
                            success: false,
                            message: "Invalid password",
                            statusCode: 401
                        });
                    }
                } else {
                    res.status(404).json({
                        success: false,
                        message: "User not found",
                        statusCode: 404
                    });
                }
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
    }      
}

