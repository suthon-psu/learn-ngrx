import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delayIncrement, increment } from './counter.actions';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
    delayIncrement = createEffect(() =>
        this.action$.pipe(
            ofType(delayIncrement),
            delay(2000),
            map(({ incBy }) =>
                increment({ incBy })
            ),            
        )
    )
    constructor(private action$: Actions){}
}