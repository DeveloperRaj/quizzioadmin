const express = require('express');
const router = express.Router();

const AccessconfigModel = require('../models/AccessconfigModel.js');

router.get('/', async (req, res) => {
	const data = await AccessconfigModel.findOne({});
	res.json(data);
});

router.post('/update', async (req, res) => {
	const { command } = req.body;
	try {
		const configDoc = await AccessconfigModel.findOne({});
		if (command === "test") {
			configDoc.isTestActive = !configDoc.isTestActive;
		}
		if (command === "answer") {
			configDoc.allowSeeCorrect = !configDoc.allowSeeCorrect;
		}
		await configDoc.save();
		res.json({ message: 'success' });
	} catch(error){
		res.json({ message: `ERROR: ${error}` });
	}
});

module.exports = router;