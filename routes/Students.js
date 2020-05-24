const express = require('express');
const router = express.Router();

const StudentModel = require('../models/StudentModel.js');

router.get('/', async (req, res) => {
	const data = await StudentModel.find({});
	res.json(data);
});

module.exports = router;