const mongoose = require('mongoose');

const Paire = mongoose.model('Paire', new mongoose.Schema({
	paire: [Array]
}));

module.exports = Paire;