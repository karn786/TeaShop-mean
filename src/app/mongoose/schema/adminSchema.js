const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema({
    adminName: {
        type: String,
        required: true,
        unique: true,
    },
    adminPassword: {
        type: String,
        required: true
    }
})

// AdminSchema.pre('save', async function(next){
//     const admin = this;
//     admin.adminPassword = await bcrypt.hash(admin.adminPassword, 8);
//     next();
// })

AdminSchema.statics.findAdminCredentials = async (adminName, adminPassword) => {
        const admin = await AdminModel.findOne({adminName: adminName});
        if(!admin)
            throw new Error('No admin Found');

        const isPasswordMatch = await bcrypt.compare(adminPassword, admin.adminPassword);
        if(!isPasswordMatch)
            throw new Error('Password is wrong');
        
        return true;
}

const AdminModel = mongoose.model('admins', AdminSchema);
module.exports = AdminModel;