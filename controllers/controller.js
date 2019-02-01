const express = require('express');
const router = express.Router();
const homeRoute = require('../routes/home');
const artistRoute = require('../routes/artist');
const albumRoute = require('../routes/album');

router.get('/', homeRoute.load);
router.get('/create-artist',artistRoute.load);
router.post('/create-artist',artistRoute.createartist);
router.get('/showall',homeRoute.showall);
router.get('/more/:id',albumRoute.loadMore);
router.post('/album/:id',albumRoute.addMore);
router.get('/deletealbum/:pid/:cid', albumRoute.deleteAlbum);
router.get('/removeartist/:id',artistRoute.removeArtist);

module.exports = router;