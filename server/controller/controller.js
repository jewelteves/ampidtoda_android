var Driver = require('../model/driverModel');
var Boundaries = require('../model/boundariesModel');
var TerminalFees = require('../model/terminalfeesModel');
var Membership = require('../model/membershipfeesModel')




// REGISTER NEW USER
exports.create = async (req, res) => {
    try {
        const { bodyno, fullname, address, gcashno, gcashname, contactno, password } = req.body;

        // Check for empty fields
        if (!bodyno || !fullname || !address || !gcashno || !gcashname || !contactno || !password ) {
            res.json({success: false, message: 'Please fill-up required feilds'})
        }

        // Check if the user already exists
        const existingUser = await Driver.findOne({ bodyno });
        if (existingUser) {
            res.json({success: false, message: 'User already exist'})
        }

        const driver = new Driver({
            bodyno,
            fullname,
            address,
            gcashno,
            gcashname,
            contactno,
            password,
        });

        // Save the new driver
        const data = await driver.save();
        res.json({success: true, message: 'Registered Successfully'})
    } catch (err) {
        res.json({success: false, message: 'Error occured while registering, Please try again later'})
    }
};




// EXTRAS - RETRIEVED AND RETURN SINGLE USER
exports.records = (req, res)=>{

    if(req.query.bodyno){
        const bodyno = req.query.bodyno;

        Driver.findOne(bodyno)
        .then(data => {
            if(!data){
                res.status(404).send({message: 'cannot found a user'})
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status({message: 'Error retrieving data user'})
        }) 
    } else {
        Driver.find()
        .then(driver => {
            res.send(driver)
        })
        .catch(err => {
            res.status(500).send({message: err.message || 'error ocure while retrieving user information'})
        })
    }
    }




// TERMINAL, BOUNDARIES, MEMBERSHIP FEES
// exports.boundaries = (req, res) => {
//     const { bodyno } = req.query;

//     if (bodyno) {
//         Boundaries.findOne({ bodyno })
//             .then(data => {
//                 if (!data) {
//                     res.status(404).send({ message: 'Cannot find a user' });
//                 } else {
//                     res.send(data);
//                 }
//             })
//             .catch(err => {
//                 res.status(500).send({ message: 'Error retrieving data user' });
//             });
//     } else {
//         Boundaries.find()
//             .then(driver => {
//                 res.send(driver);
//             })
//             .catch(err => {
//                 res.status(500).send({ message: err.message || 'Error occurred while retrieving user information' });
//             });
//     }
// };

exports.boundaries = (req, res) => {
    const { bodyno } = req.query;

    if (bodyno) {
        Boundaries.findOne({ bodyno })
            .then(data => {
                if (!data) {
                    res.json({ message: 'Cannot find a user' });
                } else {
                    res.send([data]); // Wrap the result in an array for consistency
                }
            })
            .catch(err => {
                res.json({ message: 'Error retrieving user data' });
            });
    } else {
        // If no bodyno is provided, return all data
        Boundaries.find()
            .then(users => {
                res.send(users);
            })
            .catch(err => {
                res.json({ message: err.message || 'Error occurred while retrieving user information' });
            });
    }
};


        exports.terminal = (req, res)=>{

            if(req.query.bodyno){
                const bodyno = req.query.bodyno;
        
                TerminalFees.findOne(bodyno)
                .then(data => {
                    if(!data){
                        res.status(404).send({message: 'cannot found a user'})
                    } else {
                        res.send(data)
                    }
                })
                .catch(err => {
                    res.status({message: 'Error retrieving data user'})
                }) 
            } else {
                TerminalFees.find()
                .then(driver => {
                    res.send(driver)
                })
                .catch(err => {
                    res.status(500).send({message: err.message || 'error ocure while retrieving user information'})
                })
            }
            }


            
            exports.membership = (req, res)=>{

                if(req.query.bodyno){
                    const bodyno = req.query.bodyno;
            
                    Membership.findOne(bodyno)
                    .then(data => {
                        if(!data){
                            res.status(404).send({message: 'cannot found a user'})
                        } else {
                            res.send(data)
                        }
                    })
                    .catch(err => {
                        res.status({message: 'Error retrieving data user'})
                    }) 
                } else {
                    Membership.find()
                    .then(driver => {
                        res.send(driver)
                    })
                    .catch(err => {
                        res.status(500).send({message: err.message || 'error ocure while retrieving user information'})
                    })
                }
                }


        
                
// LOGIN USER
exports.login = async (req, res) => {
    try {
        const { bodyno, password } = req.body;
        const ExistingUser = await Driver.findOne({ bodyno });

        if (!ExistingUser) {
            return res.json({ success: false, message: 'User not found, Please Register first' });
        }

        if (!bodyno || !password) {
            res.json({success: false, message: 'Please fill-up required feilds'})
        }

        if (ExistingUser.password === password) {
            return res.json({ success: true, message: 'Yey! Login successfully' });
        } else {
            return res.json({ success: false, message: 'Wrong Password' });
        }

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Internal Server Error' });
    }
};
