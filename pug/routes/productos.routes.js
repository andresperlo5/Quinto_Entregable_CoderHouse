const express = require('express')
const router = express.Router()
const ArrProducts = require('../productos/productos.array')

router.get('/', (req, res) => {
    res.render('index', {name: 'Andres'})
})

router.get('/products', (req, res) => {
    res.render('products', {data: ArrProducts})
})

router.post('/', (req, res) => {

    try {
        const { title, price, thumbnail } = req.body

        let d = (arr) => {

            let cantidad = arr.length

            if (cantidad !== 0) {
                let ultimo = arr[arr.length - 1];
                return ultimo.id
            }
        }

        let result = d(ArrProducts)

        const newObj = {
            id: result == undefined ? 1 : result + 1,
            title,
            price,
            thumbnail
        }
        ArrProducts.push(newObj)
        res.redirect('/api/products')
    } catch (error) {
        console.log(error);
    }
})

router.put('/:id', (req, res) => {

    try {
        const id = req.params.id
        const { title, price, thumbnail } = req.body


        let indexx = ArrProducts.findIndex(i => i.id == id);

        const newProd = {
            id: id,
            title,
            price,
            thumbnail
        }

        ArrProducts[indexx] = newProd

        res.send(ArrProducts)

    } catch (error) {
        console.log(error);
    }
})

router.delete('/:id', (req, res) => {

    try {

        const id = req.params.id
        let indexx = ArrProducts.findIndex(i => i.id == id);

        ArrProducts.splice(indexx, 1)

        res.send(ArrProducts)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
