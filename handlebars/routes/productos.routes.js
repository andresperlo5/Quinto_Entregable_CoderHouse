const express = require('express')
const router = express.Router()
const ArrProducts = require('../productos/productos.array')

router.get('/', (req, res) => {
    res.render('home', {})
})

router.get('/products', (req, res) => {
    if(ArrProducts.length !== 0){
        res.render('products', { layout: 'layoutProducts', data: ArrProducts })        
    }else{
        res.render('404ArrayVacio', { layout: 'Layout404ArrVacio', data: ArrProducts })        

    }
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
        console.log('ok');
        res.redirect('/api/products')
    } catch (error) {
        console.log(error);
    }
})

router.put('/:id', (req, res) => {

    try {
        const id = req.params.id
        const { title, price, thumbnail } = req.body
        console.log(title);
        console.log(price);
        console.log(thumbnail);

        let indexx = ArrProducts.findIndex(i => i.id == id);
        console.log(indexx);

        const newProd = {
            id: id,
            title,
            price,
            thumbnail
        }

        console.log('newProd', newProd);
        ArrProducts[indexx] = newProd
        console.log('ArrProducts', ArrProducts);
        res.send(ArrProducts)

    } catch (error) {
        console.log(error);
    }
})

router.delete('/products/delete/:id', (req, res) => {

    try {

        const id = req.params.id
        let indexx = ArrProducts.findIndex(i => i.id == id);

        ArrProducts.splice(indexx, 1)

        res.redirect('/api')
    } catch (error) {
        console.log(error);
    }
})

module.exports = router
