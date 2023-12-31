// firstly we need a folder convenmtion in redux-toolkiT
// index should be all main (outside of the main folder)
// app folder should be created and store.js should be inside it
// feauters folder should be created and all sort fo seperate feauters should be added
// then we need to create a store as a component by using configure store library
// configure store handles n no of reducerds as like a objects

//more info 
//loggers are used to file up the data as a log file by using middle ware library


const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cakes/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    }, 
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store