const AdminModel = require("../schema/adminSchema")
const bcrypt = require("bcrypt")

module.exports = {
    adminsignup: async (req, res) => {
        try {
            const { username, password } = req.body
            if (username && password) {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)
                const newAdmin = new AdminModel({
                    username,
                    password: hashedPassword
                })
                newAdmin.save()
                    .then((response) => {
                        console.log(response)
                        res.status(201).json({
                            message: "Admin added successfully",
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
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Internal Server Error",
                success: false
            })
        }
    }
}