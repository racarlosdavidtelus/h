import { RESET, UPDATE_DATA_POKEMON, UPDATE_POKEMON } from '../Actions/Template.actions';

const InitialState = {
	pokemon: '',
	data_pokemon: ''
};

const Template_reducer_ = (state = InitialState, action) => {
	switch (action.type) {
		case UPDATE_POKEMON:
			return { ...state, pokemon: action.value };
		case UPDATE_DATA_POKEMON:
			return { ...state, data_pokemon: action.value };
		case RESET:
			return { ...InitialState };

		default:
			return state;
	}
};

export default Template_reducer_;
