const express = require('express')
const app = express()
const routes = require('../routes/routes')

const PORT = process.env.PORT || 3000

//middleware
app.use(express.json())
app.use('/', routes)



app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))