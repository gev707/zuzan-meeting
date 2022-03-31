import {
    configureStore,
    Store,
    AnyAction,
    combineReducers,
    Reducer,
} from '@reduxjs/toolkit'

const reducer = combineReducers({
}) as Reducer

export const store: Store<any, AnyAction> = configureStore({
    reducer,
})


export type RootState = ReturnType<typeof store.getState>


