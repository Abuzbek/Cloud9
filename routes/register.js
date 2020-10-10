const express = require('express');

const passport = require('passport')

const router = express.Router();

const bcrypt = require('bcryptjs')

const Users = require('../model/UserAdmin')

/* GET home page. */
router.get('/signUp', function(req, res, next) {
    res.render('register', { title: 'Registratsiya' });
});

router.post('/signUp', function(req, res, next) {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        req.checkBody('username', 'username bosh bolmasligi kerak').notEmpty()
        req.checkBody('email', 'email bosh bolmasligi kerak').notEmpty()
        req.checkBody('password', 'password bosh bolmasligi kerak').notEmpty()
        const errors = req.validationErrors();
        if (errors) {
            res.render('register', {
                title: 'Controller when adding music',
                errors: errors
            })
        } else {
            const userAdd = new Users({
                username: username,
                email: email,
                password: password
            })
            bcrypt.genSalt(10, (err, pass) => {
                bcrypt.hash(userAdd.password, pass, (err, hash) => {
                    if (err) {
                        console.log(err);
                    }
                    userAdd.password = hash;
                    userAdd.save((err, data) => {
                        if (err) {
                            console.log(err);
                        } else {
                            req.flash('info', 'Siz muvaffaqiyatli qoshildingiz aynan siz ekanligingizni iltimos tasdiqlang')
                            res.redirect('/login')
                        }
                    })
                })
            })
        }
    })
    // ============== route Login GET method ===============

router.get('/login', (req, res, next) => {
    res.render('login', {
        title: 'LOGIN',
    })
    req.flash('danger', { message })
})

// ============== route Login GET method ===============

// ============== route Login GET method ===============

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true,
    })(req, res, next)
})

router.get('/logout', (req, res, next) => {
    req.logOut()
    req.flash('info', 'Muaffaqiyatli tizimdan chiqib ketdingiz')
    res.redirect('/login')
})

module.exports = router;