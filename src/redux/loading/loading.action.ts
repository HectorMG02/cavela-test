import {ActionType} from './loading.types';
import {Dispatch} from 'redux';


// Actions
export const toggleLoading = (loading: boolean, extraTime = 0) => async (dispatch: Dispatch) => {
	await new Promise((resolve) => setTimeout(resolve, extraTime));

	dispatch({
		type: ActionType.TOGGLE_LOADING,
		payload: loading,
	});
};