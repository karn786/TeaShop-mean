require('../mongoose/dbConnection')
const express = require('express');
const app = express();
const cors = require('cors');
const adminRouter = require('./router/admin');
const customerRouter = require('./router/customer');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(adminRouter);
app.use(customerRouter);

app.listen(port, () => {
    console.log("server started at port "+port);
})