const express = require('express');
const router = express.Router();

const QuestionModel = require('../models/QuestionModel.js');
const StudentModel = require('../models/StudentModel.js');

router.delete('/', async (req, res) => {
	try {
		await QuestionModel.deleteMany({});
		await StudentModel.deleteMany({});
		res.json({ message: 'success' });
	} catch (error) {
		res.json({ message: `ERROR: ${error}` });
	}
});

module.exports = router;