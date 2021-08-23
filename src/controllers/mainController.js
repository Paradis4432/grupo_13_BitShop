const controller = {
    index: (req, res) => {
        return res.render('index');
    },

    register: (req, res) => {
        return res.render('register');
    },

    login: (req, res) => {
        return res.render('login');
    },

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

    //editName: (req, res) => {
        //let editedName = 
    //}

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

module.exports = controller;