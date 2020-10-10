// ============= eA middlewar =============
const eA = (req, res, next) => {
    if (req.isAuthenticated()) {
        next()
    }
    else {
        req.flash('danger', 'oldin royhatdan oting')
        res.redirect('/login')
    }
    
}
module.exports = eA