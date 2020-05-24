import React, { useState, useEffect } from 'react';
import './styles/checkstudents.css';
import axios from 'axios';

import Student from '../components/Student';

const CheckStudents = () => {

	const [students, setStudents] = useState([]);

	useEffect(() => {
		const getStudents = async () => {
			const res = await axios.get('/student');
			const data = await res.data;
			setStudents(data);
		}
		getStudents();
	}, []);

	return(
		<div className="check-students">
		{
			students.map((std, index) => (
				<Student key={index} student={std} />
			))
		}
		</div>
	);
}

export default CheckStudents;