import dispatcher from "./Dispatcher";
import axios from "axios";


const Actions = {
  drawUser(phonebooks) {
    dispatcher.dispatch({
      type: "DRAW_USER",
      phonebooks,
    });
  },

  loadUser() {
    axios.get("http://localhost:3000/api/phonebooks")
      .then((phonebooks) => {
          console.log(phonebooks)
        Actions.drawUser(phonebooks.data);
      })
      .catch((err) => {
        console.log(err)
        throw err;
      });
  },

  drawAddUser(id, name, phone) {
    dispatcher.dispatch({
      type: "DRAW_ADD_USER",
      id, name, phone
    })},

    successAddUser(phonebooks) {
      dispatcher.dispatch({
        type: "SUCCESS_ADD_USER",
        phonebooks
      })},

      failedAddUser(id, name, phone) {
        dispatcher.dispatch({
          type: "FAILED_ADD_USER",
          id, name, phone
        })},
  
  AddUser(name, phone) {
  const id = Date.now();
  Actions.drawAddUser(id, name, phone)
  axios
  .post("http://localhost:3000/api/phonebooks",{id,name,phone})
  .then((phonebooks) => {
    Actions.successAddUser(phonebooks);
  })
  .catch((err) => {
    Actions.failedAddUser(id, name, phone)
    throw err
  });
  },

  successResendUser(id) {
    dispatcher.dispatch({
      type: "SUCCESS_RESEND_USER",
      id
    })},

    failedResendUser(id) {
      dispatcher.dispatch({
        type: "FAILED_RESEND_USER",
        id
      })},

  ResendUser(id, name, phone){
    axios
  .post("http://localhost:3000/api/phonebooks",{id,name,phone})
  .then((phonebooks) => {
    Actions.successResendUser(id);
  })
  .catch((err) => {
    Actions.failedResendUser(id)
    throw err
  });
  },

  successDeleteUser(id) {
    dispatcher.dispatch({
      type: "SUCCESS_DELETE_USER",
      id
    })},

    failedDeleteUser(id) {
      dispatcher.dispatch({
        type: "FAILED_DELETE_USER",
        id
      })},

  DeleteUser(id){
    axios
  .delete(`http://localhost:3000/api/phonebooks/${id}`)
  .then((phonebooks) => {
    console.log(phonebooks)
    Actions.successDeleteUser(id);
  })
  .catch((err) => {
    Actions.failedDeleteUser(id)
    throw err
  });
  }
};

export default Actions;
