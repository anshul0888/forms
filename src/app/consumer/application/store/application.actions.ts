import { Action } from '@ngrx/store';

export const SAVE_NEW_APPLICATION = 'SAVE_NEW_APPLICATION';

export class SaveNewApplication implements Action {
  readonly type = SAVE_NEW_APPLICATION;
}

export type ApplicationActions = SaveNewApplication;
