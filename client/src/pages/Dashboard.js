import React, { useState, useEffect } from 'react';
import './styles/dashboard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {

	const [isTestActive, setIsTestActive] = useState(true);
	const [isCorrectShowing, setIsCorrectShowing] = useState(true);
	const [students, setStudents] = useState([]);

	useEffect(() => {
		const getConfig = async () => {
			const res = await axios.get('/config/');
			const data = await res.data;
			setIsTestActive(data.isTestActive);
			setIsCorrectShowing(data.allowSeeCorrect);
		}
		const getStudents = async () => {
			const res = await axios.get('/student');
			const data = await res.data;
			setStudents(data);
		}
		getConfig();
		getStudents();
	}, []);

	const configToggler = async (command) => {
		try {
			const res = await axios.post('/config/update', { command });
			const { message } = await res.data;
			if (message === "success") {
				alert("toggle successful");
			} else {
				alert("oops!! something went wrong");
			}
			if (command === 'test') setIsTestActive(!isTestActive);
			if (command === 'answer') setIsCorrectShowing(!isCorrectShowing);
		} catch(error) {
			console.log(error);
		}
	}

	const clearDatabase = async () => {
		try {
			const res = await axios.delete('/clear');
			const { message } = await res.data;
			if (message === "success") {
				alert('Database cleared');
			} else {
				alert("we've got some problem...");
			}
		} catch(error) {
			console.log(error);
		}
	}

	return(
		<div className="dashboard-container">
			<div className="statictics">
				<div className="view-students">
					{students.length} students completed test
				</div>
				<div><Link to="/checkstudents">View in details</Link></div>
			</div>
			<div className="options">
				<button onClick={clearDatabase}>Clear Last Test</button>
				<button onClick={() => configToggler('test')}>{isTestActive ? 'Deactivate' : 'Activate'} test</button>
				<button onClick={() => configToggler('answer')}>{isCorrectShowing ? 'Deactivate' : 'Activate'} Checking correct answer</button>
			</div>
		</div>
	);
}

export default Dashboard;