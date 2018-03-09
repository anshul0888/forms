import { ActionReducerMap } from '@ngrx/store';
import * as fromApplication from '../consumer/application/store/application.reducers';

export interface AppState {
  application: fromApplication.State;
}

export const reducers: ActionReducerMap<AppState> = {
  application: fromApplication.applicationReducer
};
