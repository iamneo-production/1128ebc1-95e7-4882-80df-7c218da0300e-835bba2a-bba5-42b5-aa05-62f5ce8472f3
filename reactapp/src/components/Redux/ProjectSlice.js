import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
    name: 'project',
    initialState: {
        projects: []
    },
    reducers: {
        addProject: (state, action) => {
            state.projects.push(action.payload);
        },
        clearProjects: (state) => {
            state.projects = [];
        }
    }
});

export const { addProject , clearProjects} = projectSlice.actions;
export default projectSlice.reducer;
