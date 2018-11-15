const mongoose = require('mongoose');

const Student = mongoose.model('Student', new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50
	},
	level: {
		type: Number,
		required: true,
		min: 1,
		max: 5
	}
}));

module.exports = Student;