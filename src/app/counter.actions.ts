import { createAction, props } from '@ngrx/store'

export interface IncrementProps {
    incBy: number
}
export const increment = createAction(
    '[Counter] Increment',
    props<IncrementProps>()
    )

export const delayIncrement = createAction(
    '[Counter] Delay Increment',
    props<IncrementProps>()
    )