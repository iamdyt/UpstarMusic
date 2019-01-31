const express = require('express');
const router = express.Router();
const homeRoute = require('../routes/home');
const createArtistRoute = require('../routes/createartist');
const albumRoute = require('../routes/album');

router.get('/', homeRoute.load);
router.get('/create-artist',createArtistRoute.load);
router.post('/create-artist',createArtistRoute.createartist);
router.post('/search',homeRoute.sendSearch);
router.get('/showall',homeRoute.showall);
router.get('/more/:id',albumRoute.loadMore);
router.post('/album/:id',albumRoute.addMore);


module.exports = router;