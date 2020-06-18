require('../mongoose/dbConnection')
const express = require('express');
const app = express();
const cors = require('cors');
const adminRouter = require('./router/admin');
const customerRouter = require('./router/customer');

app.use(express.json());
app.use(cors());
app.use(adminRouter);
app.use(customerRouter);



app.listen(3000, () => {
    console.log("server started at port 3000");
})