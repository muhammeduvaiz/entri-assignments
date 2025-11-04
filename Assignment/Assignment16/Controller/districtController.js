const districtModel = require('../Schema/districtSchema');

module.exports = {
    addDistrict:(req,res) => {
        try{
            const {name,population,state_id} = req.body;
            if(name && population && state_id){
                const newDistrict = new  districtModel({
                    name,
                    population,
                    state_id
                })
                newDistrict.save()
                .then((response)=>{
                    console.log(response);
                    res.status(201).json({
                        success:true,
                        statusCode:201,
                        message:"District added successfully",
                        data:response
                    })
                })
                .catch((error)=>{
                    console.log(error);
                    res.status(400).json({
                        success:false,
                        statusCode:400,
                        message:"District adding failed",
                        data:error
                    })
                })
            }else{
                console.log(req.body);
                res.status(400).json({
                    success:false,
                    statusCode:400,
                    message:"Missing required fields",
                    data:req.body
                })
            }
        }catch(error){
            console.log(error);
            res.status(500).json({
                success:false,
                statusCode:500,
                message:"Internal Server Error",
                data:error
            })
        }
    },
    updateDistrictPopulation: async (req, res) => {
        try {
            const districtName = req.params.name;
            const { updatedData } = req.body;


            if (!districtName || !updatedData || typeof updatedData.population === 'undefined') {
                return res.status(400).json({
                    success: false,
                    statusCode: 400,
                    message: "Missing required fields: district name (params) and updatedData.population (body) are required",
                    data: req.body
                });
            }

            const updated = await districtModel.findOneAndUpdate(
                { name: districtName, isDeleted: false, isActive: true },
                { $set: { population: updatedData.population } },
                { new: true }
            ).lean();

            if (!updated) {
                return res.status(404).json({
                    success: false,
                    statusCode: 404,
                    message: "District not found",
                    data: null
                });
            }

            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "District population updated successfully",
                data: updated
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
    deleteDistrict: async (req, res) => {
        try {
            const districtName = req.params.name;

            if (!districtName) {
                return res.status(400).json({
                    success: false,
                    statusCode: 400,
                    message: "Missing required field: district name (params)",
                    data: null
                });
            }

            const updated = await districtModel.findOneAndUpdate(
                { name: districtName, isDeleted: false, isActive: true },
                { $set: { isDeleted: true } },
                { new: true }
            ).lean();

            if (!updated) {
                return res.status(404).json({
                    success: false,
                    statusCode: 404,
                    message: "District not found",
                    data: null
                });
            }

            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "District deleted successfully",
                data: updated
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
    groupByStates: async (req, res) => {
        try {
            const result = await districtModel.aggregate([
                { $match: { isActive: true, isDeleted: false } },
                {
                    $group: {
                        _id: "$state_id",
                        totalPopulation: { $sum: { $toInt: "$population" } },
                        districts: { $push: { name: "$name", population: "$population" } }
                    }
                },
                
                {
                    $lookup: {
                        from: "states",
                        localField: "_id",
                        foreignField: "_id",
                        as: "state"
                    }
                },
                
                { $unwind: { path: "$state", preserveNullAndEmptyArrays: true } },
              
                { $sort: { totalPopulation: -1 } }
            ]);

            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Districts grouped by state fetched successfully",
                data: result
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
    districtWithStates: async (req, res) => {
        try {
            const result = await districtModel.aggregate([
                {
                    $lookup: {
                        from: "states",
                        localField: "state_id",
                        foreignField: "_id",
                        as: "state"
                    }
                },
                { $unwind: { path: "$state", preserveNullAndEmptyArrays: true } },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        population: 1,
                        state: {
                            name: "$state.name",
                            population: "$state.population",
                            area: "$state.area"
                        }
                    }
                }
            ]);
            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Districts with state details fetched successfully",
                data: result
            });
        }catch (error) {
            console.log(error);
            return res.status(500).json({ 
                success: false,
                statusCode: 500,
                message: "Internal Server Error",
                data: error
            });
    }
},
getdistricts: async (req,res) => {
        try{
            const districts = await districtModel.find({isActive:true, isDeleted:false});
            return res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Districts fetched successfully",
                count: districts.length,
                data: districts
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
