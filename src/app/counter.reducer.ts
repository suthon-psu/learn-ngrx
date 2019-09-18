import { createReducer, on } from '@ngrx/store'
import { increment } from './counter.actions';

export const initialState = 0;
const _counterReducer = createReducer(initialState,
    on(increment, (state, {incBy}) => state + incBy)
    )

export function counterReducer(state, action){
    return _counterReducer(state, action)
}