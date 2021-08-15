import {
  DRAW_LOAD_USER,
  FAILED_LOAD_USER,
  DRAW_ADD_USER,
  SUCCESS_ADD_USER,
  FAILED_ADD_USER,
  SUCCESS_RESEND_USER,
  FAILED_RESEND_USER,
  SUCCESS_DELETE_USER,
  FAILED_DELETE_USER,
  DRAW_EDIT_USER,
  SUCCESS_EDIT_USER,
  FAILED_EDIT_USER,
  FILTER_USER
} from "../constants";

import axios from "axios";

const drawLoadUser = (users) => ({
  type: DRAW_LOAD_USER,
  users,
});

const failedLoadUser = () => ({
  type: FAILED_LOAD_USER,
});

export const loadUser = (page) => {
    var currentPage = page || 1
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/api/phonebooks")
      .then((users) => {
        dispatch(drawLoadUser(users.data.dataplus.slice((currentPage-1) * 3, currentPage * 3)));
      })
      .catch(() => {
        dispatch(failedLoadUser());
      });
  };
};
const successAddUser = () => ({
  type: SUCCESS_ADD_USER,
});

const failedAddUser = (id) => ({
  type: FAILED_ADD_USER,
  id,
});
const drawAddUser = (id, name, phone) => ({
  type: DRAW_ADD_USER,
  id,
  name,
  phone,
});

export const addUser = (name, phone) => {
  const id = Date.now();
  drawAddUser(id, name, phone);
  return (dispatch) => {
    dispatch(drawAddUser(id, name, phone));
    return axios
      .post("http://localhost:3000/api/phonebooks", { id, name, phone })
      .then(function (response) {
        console.log(response);
        dispatch(successAddUser());
      })
      .catch(function (error) {
        console.error(error);
        dispatch(failedAddUser(id));
      });
  };
};

const successResendUser = (id) => ({
  type: SUCCESS_RESEND_USER,
  id,
});

const failedResendUser = () => ({
  type: FAILED_RESEND_USER,
});

export const resendUser = (id, name, phone) =>  (dispatch) => {
  return axios
    .post("http://localhost:3000/api/phonebooks", { id, name, phone })
    .then(function (response) {
      console.log(response);
      dispatch(successResendUser(id));
    })
    .catch(function (error) {
      console.error(error);
      dispatch(failedResendUser());
    });
};

const successDeleteUser = (id) => ({
  type: SUCCESS_DELETE_USER,
  id,
});

const failedDeleteUser = (id) => ({
  type: FAILED_DELETE_USER,
  id,
});

export const deleteUser = (id) => (dispatch) => {
  return axios
    .delete(`http://localhost:3000/api/phonebooks/${id}`)
    .then(function (response) {
      console.log(response);
      dispatch(successDeleteUser(id));
    
    })
    .catch(function (error) {
      console.error(error);
      dispatch(failedDeleteUser(id));
    });
};

const successEditUser = (response) => ({
  type: SUCCESS_EDIT_USER,
  response,
});

const failedEditUser = (id, name, phone) => ({
  type: FAILED_EDIT_USER,
  id,
  name,
  phone,
});
const drawEditUser = (id, name, phone) => ({
  type: DRAW_EDIT_USER,
  id,
  name,
  phone,
});

export const editUser = (id, name, phone) => {
  return (dispatch) => {
        dispatch(drawEditUser(id, name, phone));
      return axios
      .put(`http://localhost:3000/api/phonebooks/${id}`, { id, name, phone })
      .then(function (response) {
          console.log(response);
          dispatch(successEditUser(response));
        dispatch(loadUser());
      })
      .catch(function (error) {
        console.error(error);
        dispatch(failedEditUser(id, name, phone));
      });
  };
};

export const filterUser = (name, phone) => ({
  type: FILTER_USER,
  name,
  phone,
});
