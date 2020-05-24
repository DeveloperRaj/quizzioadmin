import React from 'react';
import './styles/instructions.css';

const Instructions = () => {
	return(
		<div className="instruction-container">
			<ul>
				<li>Dashboard</li>
				<ul>
					<li className="imp">You have to clear database in order to add new test because of some limitations we have.</li>
					<li>You can use activate/deactive button to allow and disallow students to access test, for example if test time is for 2 hours then deactivate test and students won't be able to give it.</li>
					<li>Students can't see correct answers if you disable it from dashboard</li>
					<li>You can check how many students gave test and how they performed by clicking on view details</li>
				</ul>
				<li>Add Questions</li>
				<ul>
					<li>If you don't clear database, you can't access this page.</li>
					<li>Add to localstorage adds questions just in your local machine, once you add all questions then press add to database button inorder to actually make it live.</li>
					<li className="imp">Don't refresh page while adding questions, that "might" delete questions from machine and you have to add them again</li>
					<li>For now, we recommend you to write questions on notepad or other editor and copy paste here, just in case :)</li>
					<li className="imp">once you enter a question make sure it is correct because you can't delete it afterwords</li>
				</ul>
			</ul>
		</div>
	);
}

export default Instructions;