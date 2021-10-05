const express = require('express')
const app = express()
const path = require('path')
const ProductsRoutes = require('./routes/productos.routes')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded());

app.use('/api', ProductsRoutes)

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use((req, res, next) => {
    res.status(404).json({ msg: 'Pagina No Encontrada' })
})

app.listen(3002, () => {
    console.log('Escuchando Puerto: ', 3002)
})
