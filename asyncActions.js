const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.createStore
const applyMiddleWare = redux.applyMiddleware
const axios = require('axios')

const initialState = {
    loading:false,
    users:[],
    error:'',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payLoad: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payLoad: error
    }
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state, loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                    loading: false, users: action.payLoad, error:''
                }
        case FETCH_USERS_FAILED:
            return {
                    loading: false, users: [], error:action.payLoad
                }
        default:
            return state
    }
}

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
            const users = response.data.map((user) => user.id)
                dispatch(fetchUsersSuccess(users))
        }).catch(error => {
            dispatch(fetchUsersFailure(error))
        })
    }
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleware))
store.subscribe(()=> {console.log(store.getState())} )
store.dispatch(fetchUsers())