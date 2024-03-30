export enum ActionType {
    TOGGLE_LOADING = 'TOGGLE_LOADING',
}

export interface LoadingAction {
    type: ActionType;
    payload: LoadingState;
}


export interface LoadingState {
    loading: boolean;
}

export interface IncidentsAction {
    type: ActionType;
    payload: LoadingState;
}