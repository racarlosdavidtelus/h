import React from 'react';
import { TemplateS } from './Styles/Template.styles';
import { useSelector, useDispatch } from 'react-redux';
import { reset_, search_pokemon_, update_pokemon_ } from '../../Middlewares/Redux/Actions/Template.actions';

const FormTemplate = () => {
	const pk = useSelector((state) => state.Template_reducer_);
	const dispatch = useDispatch();

	const submit_ = (e) => {
		e.preventDefault();
		dispatch(search_pokemon_(pk.pokemon));
		dispatch(reset_());
	};

	return (
		<TemplateS>
			<code>Form with Redux</code>
			<form className="rendered-form" onSubmit={submit_}>
				<div className="formbuilder-text form-group field-nick">
					<label htmlFor="nick" className="formbuilder-text-label">
						Pokemon Name ? <span className="formbuilder-required">* </span>
					</label>
					<input
						type="text"
						placeholder="nick"
						className="form-control"
						name="nick"
						access="false"
						id="nick"
						required="required"
						aria-required="true"
						onChange={(e) => dispatch(update_pokemon_(e))}
						value={pk.pokemon}
					/>
				</div>
				<div className="formbuilder-button form-group field-submit">
					<button type="submit" className="btn-default btn" name="submit" access="false" id="submit">
						Search Pokemon
					</button>
					<button
						type="button"
						className="btn-default btn"
						name="submit"
						access="false"
						id="submit"
						onClick={() => dispatch(reset_())}
					>
						Reset
					</button>
				</div>
			</form>
			<pre style={{ width: '80vw', fontSize: 15 }}>
				{pk.data_pokemon !== '' ? (
					JSON.stringify(pk.data_pokemon, null, 2)
				) : (
					'Search one Pokemon, for example Gengar'
				)}
			</pre>
		</TemplateS>
	);
};

export default FormTemplate;
