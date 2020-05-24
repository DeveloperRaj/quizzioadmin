import React, { useState, useEffect } from 'react';
import './styles/addtest.css';
import axios from 'axios';

const AddTest = () => {

	const [isAccessible, setIsAccessible] = useState(true);

	useEffect(() => {
		const getQuests = async () => {
			const res = await axios.get('/question');
			const data = await res.data;
			if (data.length > 0) {
				setIsAccessible(false);
			}
		};
		getQuests();
	}, []);

	const [questions, setQuestions] = useState([]);
	const [quest, setQuest] = useState('');
	const [opt1, setOpt1] = useState('');
	const [opt2, setOpt2] = useState('');
	const [opt3, setOpt3] = useState('');
	const [opt4, setOpt4] = useState('');
	const [correct, setCorrect] = useState(0);

	const localAddClickHandler = () => {
		if (quest && opt1 && opt2 && opt3 && opt4) {
			const newQuestion = {
				question: quest,
				options: [opt1, opt2, opt3, opt4],
				correct
			};
			setQuestions([...questions, newQuestion]);
			setQuest('');
			setOpt1('');
			setOpt2('');
			setOpt3('');
			setOpt4('');
			setCorrect(0);
		} else {
			alert('Any field can not be empty');
		}
	}

	const addDatabaseHandler = async () => {
		try {
			const res = await axios.post('/question/add', { questions });
			const main = await res.data;
			if (main.message === "success") {
				alert("data added successfully");
				setIsAccessible(false);
			} else {
				alert("Oops!! we got some error");
			}
		} catch (error) {
			console.log(error);
		}
	}

	if (isAccessible) {
		return(
			<div className="add-test-container">
				<form>
					<div className="form-header">
						Add Questions
					</div>
					<div className="add-quest-container">
						<input type="text" placeholder="Write question here" value={quest} onChange={(e) => setQuest(e.target.value)} />
						<input type="text" placeholder="Option1" value={opt1} onChange={(e) => setOpt1(e.target.value)} />
						<input type="text" placeholder="Option2" value={opt2} onChange={(e) => setOpt2(e.target.value)} />
						<input type="text" placeholder="Option3" value={opt3} onChange={(e) => setOpt3(e.target.value)} />
						<input type="text" placeholder="Option4" value={opt4} onChange={(e) => setOpt4(e.target.value)} />
						<label>Correct Answer</label>
						<select value={correct} onChange={(e) => setCorrect(Number(e.target.value))}>
							<option value={0}>1</option>
							<option value={1}>2</option>
							<option value={2}>3</option>
							<option value={3}>4</option>
						</select>
					</div>
				</form>
				<button onClick={localAddClickHandler}>Add to localstorage</button>
				<button onClick={addDatabaseHandler}>Add all to database</button>
			</div>
		);
	} else {
		return(
			<div className="add-test-container">
				Page not accessible, please clear database first
			</div>
		);
	}

	
}

export default AddTest;