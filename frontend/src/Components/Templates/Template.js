import React from 'react';
import { useNavigate, Outlet } from 'react-router';
import { TemplateS } from './Styles/Template.styles';

const Template = () => {
	const navigate = useNavigate();

	return (
		<TemplateS>
			<code>Rauqoz</code>
			<button onClick={() => navigate('/child', { state: 'Go Form Template (see the url)' })}>Go to Child</button>
			<hr style={{ width: '80vw' }} />
			<Outlet />
		</TemplateS>
	);
};

export default Template;
