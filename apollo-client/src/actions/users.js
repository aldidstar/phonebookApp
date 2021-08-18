import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

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
    UPDATE_FILTER
  } from "../constants";
  
  const API_URL = 'http://localhost:3000/graphql'

const request = new ApolloClient({
    uri: API_URL
});
  
  const drawLoadUser = (users) => ({
    type: DRAW_LOAD_USER,
    users,
  });

  export const setPageFilter = (page, name, phone, totalData) => ({
    type: UPDATE_FILTER,
    page, name, phone, totalData
  })
  
  const failedLoadUser = () => ({
    type: FAILED_LOAD_USER,
  });
  
  export const loadUser = (page= 1, name = "", phone = "") => {
    const limit = 3
    let pageReal = (page - 1) * limit
    let searchName = name || ""
    let searchPhone = phone || ""
    const usersQuery = gql`
    query {
      users(pagination: {offset:${pageReal}, limit: ${limit},  name: "${searchName}", phone: "${searchPhone}"}) {
        
        items {
          id
         name
         phone
        } 
        count
      }
    }`;
    return (dispatch) => {
      return request.query({
        query: usersQuery,
    })
        .then((response) => {  
          dispatch(drawLoadUser(response.data.users.items));
          dispatch(setPageFilter(page, name, phone, response.data.users.count))
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
    const id = Date.now().toString();
    drawAddUser(id, name, phone);

    const addQuery = gql`
    mutation addUser($id: String!, $name: String!, $phone: String!) {
        addUser(id: $id, name: $name, phone: $phone) {
        id
        name
        phone
        }
    }`;
    return (dispatch) => {
      dispatch(drawAddUser(id, name, phone));
      return request.mutate({
        mutation: addQuery,
        variables: {
            id: id,
            name: name,
            phone: phone
        }
    })
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
  
  export const resendUser = (id, name, phone) => {
    const addQuery = gql`
    mutation updateUser($id: String!, $name: String!, $phone: String!) {
        addUser(id: $id, name: $name, phone: $phone) {
        id
        name
        phone
        }
    }`;
    return (dispatch) => {
    return request.mutate({
        mutation: addQuery,
        variables: {
            id: id,
            name: name,
            phone: phone
        }
    })
      .then(function (response) {
        console.log(response);
        dispatch(successResendUser(id));
      })
      .catch(function (error) {
        console.error(error);
        dispatch(failedResendUser());
      });
  }};
  
  const successDeleteUser = (id) => ({
    type: SUCCESS_DELETE_USER,
    id,
  });
  
  const failedDeleteUser = (id) => ({
    type: FAILED_DELETE_USER,
    id,
  });
  
  export const deleteUser = (id) => {
    const deleteQuery = gql`
    mutation removeUser($id: String!) {
        removeUser(id: $id) {
        id
        }
    }`;
   return (dispatch) => {
    return request.mutate({
        mutation: deleteQuery,
        variables: {
            id
        }
    })
      .then(function (response) {
        dispatch(successDeleteUser(id));
      
      })
      .catch(function (error) {
        console.error(error);
        dispatch(failedDeleteUser(id));
      });
  }};
  
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
    const editQuery = gql`
    mutation updateUser($id: String!, $name: String!, $phone: String!) {
        updateUser(id: $id, name: $name, phone: $phone) {
        id
        name
        phone
        }
    }`;
    return (dispatch) => {
          dispatch(drawEditUser(id, name, phone));
        return request.mutate({
            mutation: editQuery,
            variables: {
                id: id,
                name: name,
                phone: phone
            }
        })
        .then(function (response) {
           
            dispatch(successEditUser(response));
          dispatch(loadUser());
        })
        .catch(function (error) {
          console.error(error);
          dispatch(failedEditUser(id, name, phone));
        });
    };
  };
  
 