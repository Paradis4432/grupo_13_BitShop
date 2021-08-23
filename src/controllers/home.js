module.exports = {
    index: (req, res) => res.render("home", {style: "index", title: "BitShop"}),
    compras: (req, res) => {
        return res.render('compras');
    },

    historial: (req, res) => {
        return res.render('historial');
    },

    favorites: (req, res) => {
        return res.render('favorites');
    },

    name: (req, res) => {
        return res.render('name');
    },

    email: (req, res) => {
        return res.render('email');
    },
    
    password: (req, res) => {
        return res.render('password');
    },

    photo: (req, res) => {
        return res.render('photo');
    },
}