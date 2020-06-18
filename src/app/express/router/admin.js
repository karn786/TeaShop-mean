const express = require('express');
const router = new express.Router();
const AdminModel = require('../../mongoose/schema/adminSchema');
const CustomerModel = require('../../mongoose/schema/customerSchema');

router.post('/admin-login', async (req, res) => {
    try {
        const isAdmin = await AdminModel.findAdminCredentials(req.body.adminName, req.body.adminPassword);
        if(!isAdmin)
            res.status(401).send({error: 'unable to login'})
        res.status(202).send(isAdmin);
    } catch (error) {
        res.status(401).send(error)
    }
   
})

router.get('/show-all-customers', async (req,res) => {
    try {
        const allCustomers = await CustomerModel.find();
        let allCustomerNames = [];
        allCustomers.forEach((eachCustomer) => {
            allCustomerNames.push({fName: eachCustomer.firstName, lName: eachCustomer.lastName});
        })
        res.status(200).send(allCustomerNames);
    } catch (error) {
        res.status(500).send(error);
    }
   
})
module.exports = router;