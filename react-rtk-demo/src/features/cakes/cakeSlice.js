// const createSlice = require('@reduxjs/toolkit').createSlice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numofCakes: 10,
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numofCakes--
        },
        restocked: (state, action) => {
            state.numofCakes += action.payload
        },
    },
})

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions