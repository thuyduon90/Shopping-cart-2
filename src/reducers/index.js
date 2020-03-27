import { combineReducers } from 'redux';
import listOfProduct from './ListOfProduct';
import selectedItemsToBuy from './SelectedItemsToBuy';
import notification from './notifiation';

const counter = combineReducers({
  listOfProduct,
  selectedItemsToBuy,
  notification
})


export default counter;