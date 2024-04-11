const express =         require('express')
const cors =            require('cors')
const bodyParser =      require('body-parser')
const morgan =          require('morgan')
const dotenv =          require('dotenv')
const { readdirSync } = require('fs')

const app = express();
const port = '9090'

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json({limit:'20mb'}))
app.use(cors())


// Route
//#1
app.use('/api',require('./routes/api'))

// Route
//#2 (auto)
readdirSync('./routes')
.map((r) => app.use('/api', require('./routes/'+r)))

app.listen(port,()=>{
    console.log('server in running on port'+ port)
});