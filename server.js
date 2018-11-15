const express = require('express');
const mongoose = require('mongoose');
const student = require('./routes/student');
const paire = require('./routes/paire');

const app = express();

mongoose.connect('mongodb://localhost/pairing-sys', { useNewUrlParser: true })
	.then( () => console.log('Connected to MongoDB...'))
	.catch( err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/student', student);
app.use('/api/paire',paire);
	

const port = 5000;
app.listen(port, () => {
    console.log('listening on port '+ port);
})