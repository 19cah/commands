export const initialState = {counter: 0};

export const actions = dispatch => ({
	reset: () => {
		return dispatch({
			type: 'RESET'
		});
	},

	increment: () => {
		return dispatch({
			type: 'INCREMENT'
		});
	},

	decrement: () => {
		return dispatch({
			type: 'DECREMENT'
		});
	}
});

// Eslit-disable-next-line default-case
export const reducer = (state, action) => {
	switch (action.type) {
		case 'RESET':
			return initialState;

		case 'INCREMENT':
			return {counter: state.counter + 1};

		case 'DECREMENT':
			return {counter: state.counter - 1};
	}
};
