import React from 'react';
import './styles/sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return(
		<div className="sidebar">
			<Link to="/" className="link">Dashboard</Link>
			<Link to="/addtest" className="link">Add test</Link>
			<Link to="/instructions" className="link">Instructions</Link>
		</div>
	);
}

export default Sidebar;