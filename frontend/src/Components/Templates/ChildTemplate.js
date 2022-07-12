import React from 'react';
import { useLocation, useNavigate } from 'react-router';

const ChildTemplate = () => {
	const navigate = useNavigate();
	const { state } = useLocation();

	return (
		<div>
			<code>{state} </code>
			<button onClick={() => navigate('/child/form')}>Go to Form</button>
		</div>
	);
};

export default ChildTemplate;
