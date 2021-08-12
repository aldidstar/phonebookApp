import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import User from './User';
import dispatcher from './Dispatcher';

class TableStore extends ReduceStore {
    constructor() {
        super(dispatcher)
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {

          case "DRAW_USER":
            return  Immutable.OrderedMap(action.phonebooks.map((item) => {
              item.sent = true
              return [item.id, item]
            }))

            case 'DRAW_ADD_USER':
            return  state.set(action.id, new User({
              id: action.id,
              name: action.name,
              phone: action.phone,
              sent: true
            }))  

            case 'FAILED_ADD_USER':
              return  state.set(action.id, new User({
                id: action.id,
                name: action.name,
                phone: action.phone,
                sent: false
              })) 

              case 'SUCCESS_RESEND_USER':
              return  state.setIn([action.id, "sent"], true)

              case 'SUCCESS_DELETE_USER':
              return  state.delete(action.id)
              
              case 'FAILED_DELETE_USER':
              case 'FAILED_RESEND_USER':
              case 'SUCCESS_ADD_USER':
                default:
                  return state;
          }
      }
}

export default new TableStore();