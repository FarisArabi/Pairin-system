const Paire = require('../models/paire.js');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => {
	const paire = await Paire.find();
	res.send(paire);
})

router.post('/', async (req, res) => {
	let paire = new Paire({
		paire: req.body.paire
	});
	paire = await paire.save();
	res.send(paire);
});



module.exports = router;