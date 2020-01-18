const AUTH_REQUEST = "AUTH_REQUEST";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_ERROR = "AUTH_ERROR";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const USER_REQUEST = "USER_REQUEST";

import axios from 'axios';
import { BACKEND_URL } from '../../config/entrypoint';

export default {
  namespaced: false,
  state: {
    token: localStorage.getItem('user-token') || '',
    status: '',
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    [AUTH_REQUEST]: (state) => {
      state.status = 'loading';
    },
    [AUTH_SUCCESS]: (state, token) => {
      state.status = 'success';
      state.token = token;
    },
    [AUTH_ERROR]: (state) => {
      state.status = 'error'
    },
    [AUTH_LOGOUT]: (state) => {
      state.token = ''
    },
  },
  actions: {
    [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
      return new Promise((resolve, reject) => {
        commit(AUTH_REQUEST);
        axios
            .post(BACKEND_URL+'login', {
              email: user.email,
              password: user.password
            })
            .then(resp => {
              localStorage.setItem("user-token", resp.token);
              // Here set the header of your ajax library to the token value.
              commit(AUTH_SUCCESS, resp);
              //dispatch(USER_REQUEST);
              resolve(resp);
            })
            .catch(err => {
              commit(AUTH_ERROR, err);
              localStorage.removeItem("user-token");
              reject(err);
            });
      });
    },
    [AUTH_LOGOUT]: ({ commit }) => {
      return new Promise(resolve => {
        commit(AUTH_LOGOUT);
        localStorage.removeItem("user-token");
        resolve();
      });
    }
  }
};
