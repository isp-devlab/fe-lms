import GroupService from '../services/group.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const group = {
  namespaced: true,
  state: initialState,
  actions: {
    join({ commit }, req) {
      return GroupService.join(req).then(
        response => {
          commit('joinSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('joinFailure');
          return Promise.reject(error);
        }
      );
    }, 

    leave({ commit }, id) {
      return GroupService.leave(id).then(
        response => {
          commit('leaveSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('leaveFailure');
          return Promise.reject(error);
        }
      );
    }, 
  },
  mutations: {
    joinSuccess(state) {
      state.status.loggedIn = true;
    },
    joinFailure(state) {
      state.status.loggedIn = true;
    },
    leaveSuccess(state) {
      state.status.loggedIn = true;
    },
    leaveFailure(state) {
      state.status.loggedIn = true;
    }
  }
  
};