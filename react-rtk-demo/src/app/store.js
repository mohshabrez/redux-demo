// firstly we need a folder convenmtion in redux-toolkiT
// index should be all main (outside of the main folder)
// app folder should be created and store.js should be inside it
// feauters folder should be created and all sort fo seperate feauters should be added


import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from "../features/cakes/cakeSlice"
import icecreamReducer from "../features/icecream/icecreamSlice"
import userReducer from "../features/user/userSlice"
// const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')
// const cakeReducer = require('../features/cakes/cakeSlice')
// const icecreamReducer = require('../features/icecream/icecreamSlice')
// const userReducer = require('../features/user/userSlice')

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    }, 
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store