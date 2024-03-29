const path = require('path');
const {body} = require('express-validator');
const express = require('express');

//const rootDir = require('../util/path');
const adminController = require('../controllers/admin');
const router = express.Router();

const isAuth = require('../middleware/is-auth');

// // /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);
//
// // /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);
// // /admin/add-product => POST
router.post('/add-product',
    [
        body('title', 'Title has to be from 10 to 80 letters long!')
            .isString()
            .isLength({min: 5, max: 80})
            .trim(),
        // body('imageUrl', 'Please enter a valid image URL!')
        //     .isURL(),
        body('price', 'Please enter a valid price!')
            .isFloat(),
        body('description', 'Description has to be up to 255 letters long!')
            .isString()
            .isLength({min: 10, max: 255})
            .trim()
    ],
    isAuth, adminController.postAddProduct);
//
router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);
//
router.post('/edit-product',
    [
        body('title', 'Title has to be from 10 to 80 letters long!')
            .isString()
            .isLength({min: 5, max: 80})
            .trim(),
        // body('imageUrl', 'Please enter a valid image URL!')
            // .isURL(),
        body('price', 'Please enter a valid price!')
            .isFloat(),
        body('description', 'Description has to be up to 255 letters long!')
            .isString()
            .isLength({min:10, max: 255})
            .trim()
    ],
    isAuth, adminController.postEditProduct);
//
router.delete('/product/:productId', isAuth, adminController.deleteProduct);

module.exports = router;

