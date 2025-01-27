import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialValue: DetailsStateData = {
    items: [],
    item: null,
    loading: false,
    error: null,
}

const dataReducer = createSlice({
    name: 'datas',
    initialState: initialValue,
    reducers: {
        searchDetailsData: (state: DetailsStateData) => {
            state.loading = true;
            state.error = null;
            state.items = [];
        },
        searchDetailsSuccess: (state: DetailsStateData, action: PayloadAction<{items: []}>) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload.items;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        searchDetail: (state: DetailsStateData, _action: PayloadAction<{id: number}>) => {
            state.loading = true;
            state.error = null;
            state.item = null
        },
        searchDetailSuccess: (state: DetailsStateData, action: PayloadAction<{item: Detail}>) => {
            state.loading = false;
            state.error = null;
            state.item = action.payload.item;
        },
        searchErrorFetch: (state: DetailsStateData, action: PayloadAction<{error: string}>) => {
            state.loading = false;
            state.error = action.payload.error;
            state.item = null;
            state.items = [];
        } 
    }

})

export const { searchDetail, searchDetailSuccess, searchDetailsData, searchDetailsSuccess, searchErrorFetch } = dataReducer.actions
export default dataReducer.reducer