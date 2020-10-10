const express = require('express');
const router = express.Router();
const Users = require('../model/UserAdmin')
const Product = require('../model/Product')
    // ============== rasim images fayiliga yuklash jarayoni   ==============
const upload = require('../helper/file')
    // ============== rasim images fayiliga yuklash jarayoni   ==============
const eA = require('../helper/eA')
    /* GET home page. */
router.get('/admin', eA, (req, res, next) => {
    Product.find({}, (err, product) => {
        if (err) {
            console.log(err);
        }
        else{
            res.render('admin', {
                title: 'ASSALOMU ALEKUM HOJAYIN',
                product
            })
        }
    
    })

});
router.post('/admin', upload.single('img'), (req, res, next) => {
    try {
        // console.log(req.body); 
        const product = new Product({
            name:req.body.name,
            link:req.body.link,
            img: req.file.filename
        })
        product.save((err, product) => {
            if (err) {
                console.log(err);
            } else {
                req.flash('info', `Maxsulotimiz muaffaqiyatli qo'shildi hohlasangiz kirib ko'ring`)
                res.redirect('/admin')
            }
        })
        console.log(req.file);
    } catch (error) {
        console.log(error);
    }

});
// router.get('/:id',eA,  (req, res, next)=> {
//   Users.findById({}, (err, user) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//         res.render('users', {
//           title: 'Account',
//         });
//         console.log(req.body);
//     }
//   })
// });

module.exports = router;