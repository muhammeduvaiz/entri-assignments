const stateModel = require('../Schema/stateSchema');

module.exports = {
    addstate: (req, res) => {
        try {
            const { name, population, area } = req.body;
            if (name && population && area) {
                const newState = new stateModel({
                    name,
                    population,
                    area
                });
                newState.save()
                    .then((response) => {
                        console.log(response);
                        res.status(201).json({
                            success: true,
                            statusCode: 201,
                            message: "State added successfully",
                            data: response
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                        res.status(400).json({
                            success: false,
                            statusCode: 400,
                            message: "State adding failed",
                            data: error
                        });
                    });
            } else {
                console.log(req.body);
                res.status(400).json({
                    success: false,
                    statusCode: 400,
                    message: "Missing required fields",
                    data: req.body
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error",
                data: error
            });
        }
    },

    getstatepopulation: async (req, res) => {
        try {
            const states = await stateModel.find({
                isActive: true,
                isDeleted: false,
                name: req.params.name
            });
            if (states.length === 0) {
                return res.status(404).json({
                    success: false,
                    statusCode: 404,
                    message: "State not found",
                    data: null
                });
            } else {
                return res.status(200).json({
                    success: true,
                    statusCode: 200,
                    message: "State population retrieved successfully",
                    data: { state: states[0].name, population: states[0].population }
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error",
                data: error
            });
        }
    },

    totalPopulation: async (req, res) => {
        try {
            const result = await stateModel.aggregate([
                { $match: { isActive: true, isDeleted: false } },
                {
                    $project: {
                        population: {
                            $convert: { input: "$population", to: "double", onError: 0, onNull: 0 }
                        }
                    }
                },
                {
                    $group: { _id: null, totalPopulation: { $sum: "$population" } }
                }
            ]);

            const total = result.length > 0 ? result[0].totalPopulation || 0 : 0;
            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Total population fetched successfully",
                data: { totalPopulation: total }
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error",
                data: error
            });
        }
    },
    averageDensity: async (req,res) => {
        try{
            const result =  await stateModel.aggregate([
                {
                    $project:{
                        name:1,
                        population: 1,
                        area:1,
                        density: {
                            $divide: [
                                { $toDouble: "$population" },
                                { $toDouble: "$area" }]
                        }
                    }
                }
            ]);
            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "State population densities fetched successfully",
                data: result
            });
        }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error",
                data: error
            });
        }
    },
    getstates: async (req,res) => {
        try{
            const states = await stateModel.find({isActive:true, isDeleted:false});
            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "States fetched successfully",
                count: states.length,
                data: states
            });
        }catch(error){
            console.log(error);
            return res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Internal Server Error",
                data: error
            });
        }
    }

};
