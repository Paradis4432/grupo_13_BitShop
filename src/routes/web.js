const express = require('express');
const router = express.Router();
const path = require('path');
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/register', mainController.register);

router.get('/login', mainController.login);

router.get('/compras', mainController.compras);

router.get('/historial', mainController.historial);

router.get('/favorites', mainController.favorites);

router.get('/config/name', mainController.name);

router.get('/config/email', mainController.email);

router.get('/config/password', mainController.password);

router.get('/config/photo', mainController.photo);

/*
app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, '../views','index.html')));

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, '../views', 'register.html')));

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname, '../views', 'login.html')));

*/

module.exports = router;