import {Component} from "react";
import TableBox from "./component/TableBox";
import {Container} from 'flux/utils';
import TableStore from "./flux/TableStore";
import TableActions from "./flux/TableActions";

const convert = function (containerClass) {
  const tmp = containerClass;
  containerClass = function (...args) {
    return new tmp(...args);
  };
  containerClass.prototype = tmp.prototype;
  containerClass.getStores = tmp.getStores;
  containerClass.calculateState = tmp.calculateState;
  return containerClass
}

class App extends Component {

  static getStores() {
    return [
      TableStore
    ]
  }

  static calculateState(prevState) {
    return {
      phonebooks: TableStore.getState(),
      onLoad : TableActions.loadUser,
      onAdd : TableActions.AddUser,
      onDelete : TableActions.DeleteUser,
      onResend : TableActions.ResendUser,
      onFilter : TableActions.FilterUser,
      onEdit : TableActions.EditUser,
    }
  }

  render() {
    return <TableBox {...this.state} />
  }
}


export default Container.create(convert(App)) ;
