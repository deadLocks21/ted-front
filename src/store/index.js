import { createStore } from "vuex";

export default createStore({
  state: {
    connected: false,
    todolists: [],
    displayed_todolist: {
      id: 0,
      name: "Clique sur une todolist à gauche pour l'afficher",
      tasks: {

      },
    },
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
    SET_DISPLAYED_TODOLIST(state, todolist) {
      state.displayed_todolist = todolist;
    },
    SET_COMPLETE(state, task) {
      let index_todolist = state.todolists.map(function(e) { return e.id; }).indexOf(task.todolist_id);
      let index_task = state.todolists[index_todolist].tasks.map(function(e) { return e.id; }).indexOf(task.id);
      state.todolists[index_todolist].tasks[index_task].completed = true;
    },
    SET_UNCOMPLETE(state, task) {
      let index_todolist = state.todolists.map(function(e) { return e.id; }).indexOf(task.todolist_id);
      let index_task = state.todolists[index_todolist].tasks.map(function(e) { return e.id; }).indexOf(task.id);
      state.todolists[index_todolist].tasks[index_task].completed = false;
    },
    ADD_NEW_TODOLIST(state, todolist) {
      state.todolists.push(todolist);
    }
  },
  actions: {
    login(context, payload) {
      if (payload) context.commit("CONNECTION");
      else context.commit("DISCONNECTION");
    },
    setTodoLists(context, payload) {
      if (payload instanceof Array) context.commit("SET_TODOLISTS", payload);
    },
    setDisplayed(context, payload) {
      if (payload instanceof Object)
        context.commit("SET_DISPLAYED_TODOLIST", payload);
    },
    setComplete(context, payload) {
      if (payload.completed) context.commit("SET_COMPLETE", payload);
      else context.commit("SET_UNCOMPLETE", payload);
      // TODO Add online !!
    },
    addNewTodolist(context) {
      let new_todolist = {id: 8, name: "Une nouvelle todo", tasks: {}};
      context.commit("ADD_NEW_TODOLIST", new_todolist);
      context.commit("SET_DISPLAYED_TODOLIST", new_todolist);
      // TODO Add online !!
    },
  },
  modules: {},
});
