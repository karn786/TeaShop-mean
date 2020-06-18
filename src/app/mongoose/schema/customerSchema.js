const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const CustomerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        lowercase: true
    },
    lastName: {
        type: String,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String
    },
    gender: {
        type: String
    }

});
CustomerSchema.statics.findCustomerCredentials = async(email,password) => {
    const customer = await customerModel.findOne({email: email});
        if(!customer)
            throw new Error('No customer found!');

        const isPasswordMatch = await bcrypt.compare(password, customer.password);
        if(!isPasswordMatch)
            throw new Error('Password is wrong');
        
        return true;
}

const customerModel = mongoose.model('Customers', CustomerSchema);

module.exports = customerModel;