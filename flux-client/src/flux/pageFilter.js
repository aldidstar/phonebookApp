// import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import dispatcher from './Dispatcher';
  
class pageFilter extends ReduceStore {
    constructor() {
        super(dispatcher)
    }
   getInitialState(){
    return {  page: 1,
      name: "",
      phone: "",
      totalData: 0
  }}

   reduce(state, action)  {
    switch (action.type) {
      case "UPDATE_FILTER":
        return { 
            page: action.page,
            name: action.name,
            phone: action.phone,
            totalData: action.totalData
        }
  
      
      default:
        return state;
    }
  }}
  
  export default new pageFilter();