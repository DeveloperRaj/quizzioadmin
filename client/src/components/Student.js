import React from 'react';

const Student = ({ student }) => {
	return(
		<div className="result">
			<span>{ student.name }</span>
			<span>{ student.score }</span>
		</div>
	);
}

export default Student;