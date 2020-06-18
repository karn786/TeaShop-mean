const dbURL = 'mongodb://127.0.0.1:27017/TeaShop' ;
const mongoose = require('mongoose');
mongoose.connect(dbURL, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then((result) => {
    console.log("DB connected successfully!")
}).catch(() => {
    console.log("DB not connected!")
})