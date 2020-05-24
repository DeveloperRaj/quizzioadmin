const express = require('express');
const router = express.Router();

const QuestionModel = require('../models/QuestionModel.js');

router.get('/', async (req, res) => {
	const data = await QuestionModel.find({});
	res.json(data);
});

router.post('/add', async (req, res) => {
	const { questions } = req.body;
	try {
		for (const question of questions) {
			const newQuestion = new QuestionModel(question);
			await newQuestion.save();
		}
		res.json({ message: 'success' });
	} catch(error) {
		res.json({ message: `ERROR: ${error}` });
	}
});

module.exports = router;