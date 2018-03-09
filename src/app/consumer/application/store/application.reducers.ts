import * as ApplicationActions from './application.actions';
import { NewApplication } from '../new-application/new-application.model';

export interface State {
  newApplication: any;
}

const initialState: State = {
  newApplication: {}
}

export function applicationReducer (state = initialState, action: ApplicationActions.ApplicationActions) {
  switch (action.type) {}
}
