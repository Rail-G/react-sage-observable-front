import { debounce, put, retry, spawn, takeLatest } from "redux-saga/effects";
import { searchFetch } from "../api/searchFetch";
import { searchSkillsFailure, searchSkillsRequest, searchSkillsSuccess, changeSearchField } from "../redux/reducer/searchReducer";

function filterChangeSearchAction({payload}: {payload: SearchStateData}) {
    return payload.search.trim() !== ''
}

function* handleChangeSearchSaga(action: SearchAction) {
    if (filterChangeSearchAction(action)) {
        yield put(searchSkillsRequest({search: action.payload.search}))
    }
}

function* handleSearchSkillsSage(action: SearchAction) {
    try {
        const maxCount = 3;
        const delay = 1000;
        const data: [] = yield retry(
            maxCount,
            delay,
            searchFetch,
            action.payload.search
        )
        console.log(data)
        yield put(searchSkillsSuccess({items: data}))
    } catch (error) {
        if (error instanceof Error) {
            yield put(searchSkillsFailure({error: error.message}))
        }
    }
}

function* watchChangeSearchSaga() {
    yield debounce(500, changeSearchField.type, handleChangeSearchSaga)
}

function* watchSearchSkillsRequest() {
    yield takeLatest(searchSkillsRequest.type, handleSearchSkillsSage)
}

export default function* rootSaga () {
    yield spawn(watchChangeSearchSaga)
    yield spawn(watchSearchSkillsRequest)
}