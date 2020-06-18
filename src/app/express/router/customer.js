const express = require('express');
const router = new express.Router();
const encodePassword = require('../encodePassword');
const CustomerModel = require('../../mongoose/schema/customerSchema');

router.post('/customer-login', async (req, res) => {
    try {
        const isCustomer = await CustomerModel.findCustomerCredentials(req.body.email, req.body.password);
        if(!isCustomer)
            res.status(401).send('Unable to find');
        res.status(201).send(isCustomer);
    } catch (error) {
        res.status(401).send(error);   
    }
    

})




router.post('/customer-signup', async (req, res) => {
   const encryptedPassword = await encodePassword(req.body.password);
   const customer = new CustomerModel({
       firstName: req.body.fName,
       lastName: req.body.lName,
       email: req.body.email,
       password: encryptedPassword,
       gender: req.body.gender
   });
   customer.save((err, customer) => {
    if(err)
        res.status(500).send(err)
    res.status(200).send(customer);
   })
   
})

module.exports = router;