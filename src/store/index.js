import { createStore } from "vuex";

export default createStore({
  state: {
    connected: false,
    todolists: [],
  },
  mutations: {
    CONNECTION(state) {
      state.connected = true;
    },
    DISCONNECTION(state) {
      state.connected = false;
    },
    SET_TODOLISTS(state, list) {
      state.todolists = list;
    },
  },
  actions: {
    login(context, payload) {
      if (payload) context.commit("CONNECTION");
      else context.commit("DISCONNECTION");
    },
    setTodoLists(context, payload) {
      if (payload instanceof Array) context.commit("SET_TODOLISTS", payload);
    },
  },
  modules: {},
});
