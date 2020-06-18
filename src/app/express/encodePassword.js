const bcrypt = require('bcrypt')

const encodePassword = async (password) => {
    const encryptedPassword = await bcrypt.hash(password, 8);
    return encryptedPassword;
}

module.exports = encodePassword; 