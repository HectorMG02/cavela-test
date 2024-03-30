import {ActionType, LoadingAction, LoadingState} from './loading.types';

const initialState: LoadingState = {
	loading: false,
};

const loadingReducer = (state: LoadingState = initialState, action: LoadingAction) => {
	switch (action.type) {
	case ActionType.TOGGLE_LOADING:
		return {
			...state,
			loading: action.payload,		};


	default:
		return state;
	}
};

export default loadingReducer;
