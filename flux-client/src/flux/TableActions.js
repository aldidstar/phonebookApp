import dispatcher from "./Dispatcher";
import axios from "axios";


const Actions = {
  drawUser(phonebooks) {
    dispatcher.dispatch({
      type: "DRAW_USER",
      phonebooks,
    });
  },
setPageFilter(page, name, phone, totalData) {
dispatcher.dispatch({
    type: "UPDATE_FILTER",
    page, name, phone, totalData
  });
},

  loadUser(page= 1, name = "", phone = "") {
    const limit = 3
    let offset = (page - 1) * limit
    axios.get("http://localhost:3000/api/phonebooks", {
      params: {
        name, phone, limit, offset
      }
    })
      .then((phonebooks) => {
        console.log(phonebooks.data.count)
      Actions.drawUser(phonebooks.data.data)
      Actions.setPageFilter(page, name, phone, phonebooks.data.count)
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
    Actions.loadUser(phonebooks.data.data)
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
    var result = window.confirm("want to delete ?");
  if (result) {
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
  }},

  FilterUser(name, phone) {
    dispatcher.dispatch({
      type: "FILTER_USER",
      name, phone
    })},


    drawEditUser(id, name, phone) {
   dispatcher.dispatch({
     type: "DRAW_EDIT_USER",
     id, name, phone
    })},

    successEditUser(phonebooks) {
      dispatcher.dispatch({
        type: "SUCCESS_EDIT_USER",
        phonebooks
      })},

      failedEditUser(id, name, phone) {
        dispatcher.dispatch({
          type: "FAILED_EDIT_USER",
          id, name, phone
        })},
    
    EditUser(id, name, phone) {
      Actions.drawEditUser(id, name, phone)
      axios.put(`http://localhost:3000/api/phonebooks/${id}`,{id,name,phone})
      .then((phonebooks) => {
        Actions.successEditUser(phonebooks);
      })
      .catch((err) => {
        Actions.failedEditUser(id, name, phone);
        throw err;
      });
    }
};

export default Actions;
