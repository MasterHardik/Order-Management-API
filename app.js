const express = require('express')
const cors = require('cors');
const config = require('dotenv').config()
const bodyParser = require('body-parser')
const sequelize = require('./models/sequelize')
const orderRouter = require('./routes/orderRoutes')
const personRouter = require('./routes/personRoutes');
const partyRoutes = require('./routes/partyRoutes');
const app = express()
const port = 3001

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('hello!!!');
})

app.use('/api',orderRouter);
app.use('/api',personRouter);
app.use('/api',partyRoutes)


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})