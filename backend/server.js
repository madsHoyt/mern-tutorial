const express = require("express");
const dotenv = require("dotenv").config(); //allows us to use .env
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;

const app = express();

//These two lines are needed to read json.body
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`));
