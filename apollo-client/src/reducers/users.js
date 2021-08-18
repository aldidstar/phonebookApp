import {
  DRAW_LOAD_USER,
  DRAW_ADD_USER,
  FAILED_ADD_USER,
  SUCCESS_RESEND_USER,
  SUCCESS_DELETE_USER,
  FAILED_DELETE_USER,
  DRAW_EDIT_USER,
  SUCCESS_EDIT_USER,
  FAILED_EDIT_USER,

} from "../constants";

const users = (state = [], action) => {
  switch (action.type) {
    case DRAW_LOAD_USER:
      return action.users.map((item) => {
        return {
          id: item.id,
          name: item.name,
          phone: item.phone,
          sent: true,
         
        };
      });

    case DRAW_ADD_USER:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          phone: action.phone,
          sent: true,
        },
      ];

    case FAILED_ADD_USER:
      return state.map((item) => {
        if (item.id === action.id) {
          item.sent = false;
        }
        return item;
      });

    case SUCCESS_RESEND_USER:
      return state.map((item) => {
        if (item.id === action.id) {
          item.sent = true;
        }
        return item;
      });
    case SUCCESS_DELETE_USER:
      return  state.filter((item) =>{
          return item.id !== action.id
      })
   
    case DRAW_EDIT_USER:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          phone: action.phone,
          sent: true,
        },
      ];

      case FAILED_DELETE_USER:
    case SUCCESS_EDIT_USER:
        
    
    case FAILED_EDIT_USER:
       

    default:
      return state;
  }
};

export default users;
