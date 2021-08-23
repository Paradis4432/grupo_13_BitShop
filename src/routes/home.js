const express = require("express");
const router = express.Router();
const home = require("../controllers/home");

router.get("/", home.index);    

router.get('/compras', home.compras);

router.get('/historial', home.historial);

router.get('/favorites', home.favorites);

router.get('/config/name', home.name);

router.get('/config/email', home.email);

router.get('/config/password', home.password);

router.get('/config/photo', home.photo);

module.exports = router;