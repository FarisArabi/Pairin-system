const Student = require('../models/student.js');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//Get all students 
router.get('/', async (req, res) => {
	const student = await Student.find();
	console.log(student);
	res.send(student);
})

//Add new student
router.post('/', async (req, res) => {
	let student = new Student({
		name: req.body.name,
		level: req.body.level
	});
	student = await student.save();
	res.send(student);
});

//Update student level
router.put('/:id', async (req, res) => {
	const student = await Student.findByIdAndUpdate(req.params.id,
	{
		level: req.body.level	
	}, {new: true});
	
	res.send(student);
});

//Delete student
router.delete('/:id', async (req, res) => {
	const student = await Student.findByIdAndRemove(req.params.id);
	res.send(student);
})

module.exports = router;