const createSlice = require('@reduxjs/toolkit').createSlice

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

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions