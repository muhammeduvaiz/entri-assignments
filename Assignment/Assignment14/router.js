const router = require('express').Router();

const customers = [
    {
        id: 1,
        name: "uvaiz",
        email: "uvaiz@gmail.com",
        location: "delhi",
        phone: "+91-9876543210",
        age: 25,
        status: "active"
    },
    {
        id: 2,
        name: "john",
        email: "john@gmail.com",
        location: "mumbai",
        phone: "+91-9876543211",
        age: 30,
        status: "active"
    },
    {
        id: 3,
        name: "doe",
        email: "doe@gmail.com",
        location: "kolkata",
        phone: "+91-9876543212",
        age: 28,
        status: "inactive"
    },
    {
        id: 4,
        name: "alice",
        email: "alice@gmail.com",
        location: "bangalore",
        phone: "+91-9876543213",
        age: 32,
        status: "active"
    },
    {
        id: 5,
        name: "bob",
        email: "bob@gmail.com",
        location: "chennai",
        phone: "+91-9876543214",
        age: 27,
        status: "active"
    },
    {
        id: 6,
        name: "charlie",
        email: "charlie@gmail.com",
        location: "delhi",
        phone: "+91-9876543215",
        age: 35,
        status: "active"
    },
    {
        id: 7,
        name: "diana",
        email: "diana@gmail.com",
        location: "mumbai",
        phone: "+91-9876543216",
        age: 29,
        status: "inactive"
    },
    {
        id: 8,
        name: "eve",
        email: "eve@gmail.com",
        location: "pune",
        phone: "+91-9876543217",
        age: 26,
        status: "active"
    }
];


const filterCustomers = (customers, filters) => {
    return customers.filter(customer => {
        
        if (filters.name && !customer.name.toLowerCase().includes(filters.name.toLowerCase())) {
            return false;
        }
        
        
        if (filters.email && !customer.email.toLowerCase().includes(filters.email.toLowerCase())) {
            return false;
        }
        
  
        if (filters.location && !customer.location.toLowerCase().includes(filters.location.toLowerCase())) {
            return false;
        }
        
        return true;
    });
};


const paginateResults = (data, page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    
    return {
        data: data.slice(startIndex, endIndex),
        pagination: {
            currentPage: page,
            totalPages: Math.ceil(data.length / limit),
            totalItems: data.length,
            itemsPerPage: limit,
            hasNextPage: endIndex < data.length,
            hasPrevPage: page > 1
        }
    };
};

router.get('/details', (req, res) => {
    try {
        console.log("details API called");
        
        // Extract query parameters
        const { name, email, location, page = 1, limit = 5 } = req.query;
        
        // Validate pagination parameters
        const pageNum = parseInt(page);
        const limitNum = parseInt(limit);
        
        if (pageNum < 1 || limitNum < 1 || limitNum > 100) {
            return res.status(400).json({
                success: false,
                statuscode: 400,
                message: "Invalid pagination parameters. Page must be >= 1, limit must be between 1 and 100"
            });
        }
        
        // Apply filters
        const filters = { name, email, location };
        const filteredCustomers = filterCustomers(customers, filters);
        
        // Apply pagination
        const paginatedResults = paginateResults(filteredCustomers, pageNum, limitNum);
        
        res.status(200).json({
            success: true,
            statuscode: 200,
            message: "Details fetched successfully",
            data: paginatedResults.data,
            pagination: paginatedResults.pagination,
            filters: {
                name: name || null,
                email: email || null,
                location: location || null
            }
        });
        
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            success: false,
            statuscode: 500,
            message: "Internal Server Error"
        });
    }
});

router.post('/addDetails',(req,res)=>{
    console.log("addDetails API called");
    console.log(req.body);
    res.status(200).json({
        success: true,
        statuscode: 200,
        message: "Details added successfully",
        data: req.body
    });
},(err)=>{
    console.error("Error:",err);
    res.status(500).json({
        success: false,
        statuscode: 500,
        message: "Internal Server Error"
    });
});

router.put('/updateDetails',(req,res)=>{
    console.log("updateDetails API called");
    console.log(req.body);
    res.status(200).json({
        success: true,
        statuscode: 200,
        message: "Details updated successfully",
        data: req.body
    });
},(err)=>{
    console.error("Error:",err);
    res.status(500).json({
        success: false,
        statuscode: 500,
        message: "Internal Server Error"
    });
});

router.delete('/deleteDetails',(req,res)=>{ 
    console.log("deleteDetails API called");
    console.log(req.query);
    res.status(200).json({
        success: true,
        statuscode: 200,
        message: "Details deleted successfully",
        data: req.query
        });
},(err)=>{
    console.error("Error:",err);
    res.status(500).json({
        success: false,
        statuscode: 500,
        message: "Internal Server Error"
    });
});

module.exports = router;