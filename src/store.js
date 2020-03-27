import { createStore } from 'redux'
import reducer from './reducers/index'

const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

store.subscribe(() => 
{})

//  store.dispatch({type: 'TOGGLE_FORM'})

//  store.dispatch(actionSort('name','asc'));
//store.dispatch(actionCartAddProduct({id:'1', name: 'thuy'}, 2));


export default  store;

