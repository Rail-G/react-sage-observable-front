import { Epic, ofType } from "redux-observable";
import { searchDetail, searchDetailsData, searchDetailsSuccess, searchDetailSuccess, searchErrorFetch } from "../redux/toolkit";
import { catchError, map, of, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax"


interface SearchDetailsAction {
    type: 'datas/searchDetailsData',
}

interface SearchDetailsSuccessAction {
    type: 'datas/searchDetailsSuccess';
    payload: { items: [] }; 
}

interface SearchErrorFetchDetailsAction {
    type: 'datas/searchErrorFetch';
    payload: { error: string };
}

interface SearchDetailAction {
    type: 'datas/searchDetail',
    payload: {id: number};
}

interface SearchDetailSuccessAction {
    type: 'datas/searchDetailSuccess';
    payload: { item: Detail }; 
}

export type MyActions =  SearchDetailsSuccessAction | SearchErrorFetchDetailsAction | SearchDetailsAction | SearchDetailAction | SearchDetailSuccessAction ;

export const fetchDetails: Epic<MyActions, MyActions> = (action$) => action$.pipe(
    ofType(searchDetailsData.type),
    switchMap(() => 
        ajax.getJSON(import.meta.env.VITE_DETAILS_URL).pipe(
            map(responseData => searchDetailsSuccess({items: responseData as []})),
            catchError(errorData => of(searchErrorFetch({error: errorData.message})))
        )
    )
)

export const fetchDetail: Epic<MyActions, MyActions> = (action$) => action$.pipe(
    ofType(searchDetail.type),
    switchMap((action: SearchDetailAction) => 
        ajax.getJSON(`${import.meta.env.VITE_DETAILS_URL}${action.payload.id}`).pipe(
            map(response => searchDetailSuccess({item: response as Detail})),
            catchError(errorText => of(searchErrorFetch({error: errorText.message})))
        )
    )
)