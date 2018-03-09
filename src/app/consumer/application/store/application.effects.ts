import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';

import * as ApplicationActions from './application.actions';
import * as fromApplication from './application.reducers';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ApplicationEffects {
  @Effect({dispatch: false})
  newApplicationSend = this.action$.ofType(ApplicationActions.SAVE_NEW_APPLICATION)
    .withLatestFrom(this.store.select('newApplication'))
    .switchMap(
      ([action, state]) => {
        const req = new HttpRequest('PUT', 'http://localhost:3000', state.newApplication);
        return this.httpClient.request(req);
      }
    );

  constructor(private action$: Actions, private httpClient: HttpClient, private store: Store<fromApplication.State>) {}
}
