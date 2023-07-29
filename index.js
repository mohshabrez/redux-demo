//WHAT I LEARN IN REDUX AND Y ITS USED:

// REDUX IS MAINLY USED FOR REDUCER HELPING FUNCTIONS
// IT CREATES A STORE HOLDS ALL THE STATEMANAGEMNET
// HELPS TO USE MULTIPLE REDUCERS USING COMBINEREDUCERS
//BIND ACTIONS ARE USED TO CALLING DISPATCH ACTIONS
//APPLY MIDDLEWARE IS USED TO LOGGING THE DATA USING LOGGER FUNCTIONS
// IMMER - IS USED FOR STATEMANAGMENT IN NESTED FUNCTIONS
// REDUX THUNK IS USED TO API CALLS USING AXIOS

//process write code in redux
// -- first import redux, then create store
// then give actions sepertaley,
// write a reducer and actions calls seperately
// create a store usinge const store = createStore(assign reducer in it) -- if there are more reducers can root it in an object
// then store.subscribe('store.getstate()')
// then call store.dispatch(and action of function here) -- we can bind and call by objects level


const redux = require('redux')

const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers 
const applyMiddleWare = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED ='CAKE_RESTOCKED';
const ICECREAM_ORDER = 'ICECREAM_ORDER';
const ICECREAM_RESTOCKED ='ICECREAM_RESTOCKED'

function orderCake(){
    return{
        type: CAKE_ORDERED,
        payLoad: 1,
    }
}

function restockCake(qty = 1){
    return{
        type: CAKE_RESTOCKED,
        payLoad: qty,
    }
}

function order_IceCream(qty = 1){
    return {
        type: ICECREAM_ORDER,
        payLoad: qty
    }
}

function restockIcecream(qty=1){
    return{
        type: ICECREAM_RESTOCKED,
        payLoad: qty
    }
}

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20,
}

const cakeReducer = (state= initialState, action)=>{
    switch (action.type) {
        case CAKE_ORDERED:
            return{
                ...state, numOfCakes: state.numOfCakes -1
            }
        case CAKE_RESTOCKED:
            return{
                ...state, numOfCakes: state.numOfCakes + action.payLoad
            } 
          
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ICECREAM_ORDER:
            return{
                ...state, numOfIceCreams: state.numOfIceCreams - action.payLoad
            } 
        case ICECREAM_RESTOCKED:
            return{
                ...state, numOfIceCreams: state.numOfIceCreams + action.payLoad
            } 
    
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer, iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleWare(logger))
console.log('initialState', store.getState())

const unsubscribe = store.subscribe(()=> {})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restockCake(3))

const actions = bindActionCreators({orderCake, restockCake, order_IceCream, restockIcecream}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(3)
actions.order_IceCream(2)
actions.restockIcecream(5)


unsubscribe()