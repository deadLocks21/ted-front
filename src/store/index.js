import { createStore } from "vuex";

export default createStore({
  state: {
    connected: false,
  },
  mutations: {
    CONNECTION(state) {
      state.connected = true;
    },
    DISCONNECTION(state) {
      state.connected = false;
    },
  },
  actions: {
    login(context, playload) {
      if(playload) 
        context.commit('CONNECTION')
      else
        context.commit('DISCONNECTION')
    }
  },
  modules: {},
});
