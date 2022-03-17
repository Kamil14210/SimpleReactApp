import { createStore} from 'redux';

const incrementCount = ({incrementBy =1} = {}) =>({
    type: 'INCREMENT',
    incrementBy
})
const decrementCount = ({decrementBy =1} = {}) =>({
    type: 'DECREMENT',
    decrementBy
})
const setCount = ( {count = 303} = {})=>({
    type: 'SET',
    count
})
const resetCount = ( {count = 0} = {})=>({
    type: 'RESET'
})
const countReducer = ((state = {count: 0}, action) =>{
    switch (action.type){
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
           // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;

            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
                }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
})
const store = createStore(countReducer);
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());

})

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 10}));

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 5}));
store.dispatch(resetCount({count: 303}));
store.dispatch(setCount({count: 303}));
