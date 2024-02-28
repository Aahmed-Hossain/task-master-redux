import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tasks: []
}
const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{}
});
export default tasksSlice.reducer;