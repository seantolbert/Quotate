var express = require('express');
var router = express.Router();
const sourcesCtrl = require('../controllers/sources')

router.get('/sources/new', sourcesCtrl.new);
router.post('/sources', sourcesCtrl.create);
router.post('/quotes/:id/sources', sourcesCtrl.addToQuote);