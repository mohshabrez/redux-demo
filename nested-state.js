const redux = require('redux')
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const produce = require('immer').produce

const UPDATE_ADDRESS = 'UPDATE_ADDRESS'

const updateAddress = (street) => {
    return{
        type: UPDATE_ADDRESS,
        payLoad: street
    }
}

const initialState = {
    name: 'vishwas',
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case UPDATE_ADDRESS:
            // return{
            //     ...state, address: {...state.address , street: action.payLoad}
            // }
            return produce(state, (draft)=>{draft.address.street = action.payLoad}  )
            default : {
                return state
            }
    }
}

const store = createStore(reducer)
console.log('initialState', store.getState())

const unsubscribe = store.subscribe(()=> console.log('updateStatus', store.getState()))

// const actions = bindActionCreators({updateAddress}, store.dispath)

store.dispatch(updateAddress('456 Main Street'))
unsubscribe()