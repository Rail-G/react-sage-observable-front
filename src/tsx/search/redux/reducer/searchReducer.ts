import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialData: SearchStateData = {
    items: [], error: null, loading: false, search: ''
}

const searchSlice = createSlice({
    name: 'search',
    initialState: initialData,
    reducers: {
        changeSearchField(state, action: PayloadAction<{ search: string }>) {
            state.search = action.payload.search;
            state.items = [];
            state.error = '';
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        searchSkillsRequest(state, _action: PayloadAction<{search: string}>) {
            state.loading = true;
            state.error = null;
        },
        searchSkillsSuccess(state, action: PayloadAction<{ items: SerachItem[] }>) {
            state.loading = false;
            state.error = null;
            state.items = action.payload.items;
        },
        searchSkillsFailure(state, action: PayloadAction<{ error: string }>) {
            state.loading = false;
            state.error = action.payload.error;
        }
    }
});

export const {changeSearchField, searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure} = searchSlice.actions
export default searchSlice.reducer;