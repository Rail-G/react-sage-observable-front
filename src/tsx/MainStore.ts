import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './mainDetails/redux/toolkit'
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { fetchDetail, fetchDetails, MyActions } from "./mainDetails/epic/epic";
import searchSlice from "./search/redux/reducer/searchReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./search/saga/rootSaga";

const combinedEpics = combineEpics(
    fetchDetails,
    fetchDetail
)

const epicMiddleware = createEpicMiddleware<MyActions, MyActions>()

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        details: dataReducer,
        search: searchSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware, sagaMiddleware)
})

sagaMiddleware.run(rootSaga)
epicMiddleware.run(combinedEpics)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState> 