import { createStore } from "vuex";

export default createStore({
  state: {
    connected: false,
    todolists: [],
    displayed_todolist: {
      id: 0,
      name: "Clique sur une todolist à gauche pour l'afficher",
      tasks: {},
    },
    edit: false,
    delete: false,
  },
  mutations: {
    CONNECTION(state) {
      state.connected = true;
    },
    DISCONNECTION(state) {
      state.connected = false;
    },
    ENTER_EDIT_MODE(state) {
      state.edit = true;
    },
    EXIT_EDIT_MODE(state) {
      state.edit = false;
    },
    ENTER_DELETE_MODE(state) {
      state.delete = true;
      state.edit = false;
    },
    EXIT_DELETE_MODE(state) {
      state.delete = false;
    },
    SET_TODOLISTS(state, list) {
      state.todolists = list;
    },
    SET_DISPLAYED_TODOLIST(state, todolist) {
      state.displayed_todolist = todolist;
    },
    SET_COMPLETE(state, task) {
      let index_todolist = state.todolists
        .map(function(e) {
          return e.id;
        })
        .indexOf(state.displayed_todolist.id);
      let index_task = state.todolists[index_todolist].tasks
        .map(function(e) {
          return e.id;
        })
        .indexOf(task.id);
      state.todolists[index_todolist].tasks[index_task].completed = true;
    },
    SET_UNCOMPLETE(state, task) {
      let index_todolist = state.todolists
        .map(function(e) {
          return e.id;
        })
        .indexOf(state.displayed_todolist.id);
      let index_task = state.todolists[index_todolist].tasks
        .map(function(e) {
          return e.id;
        })
        .indexOf(task.id);
      state.todolists[index_todolist].tasks[index_task].completed = false;
    },
    ADD_NEW_TODOLIST(state, todolist) {
      state.todolists.push(todolist);
    },
    ADD_NEW_TASK(state, task) {
      let index_todolist = state.todolists
        .map(function(e) {
          return e.id;
        })
        .indexOf(task.todolist);
      state.todolists[index_todolist].tasks.push(task); // TODO edit
    },
    DELETE_TASK(state, task) {
      let index_todolist = state.todolists
        .map(function(e) {
          return e.id;
        })
        .indexOf(state.displayed_todolist.id);
      let index_task = state.todolists[index_todolist].tasks
        .map(function(e) {
          return e.id;
        })
        .indexOf(task.id);
      state.todolists[index_todolist].tasks.splice(index_task, 1);
    },
    DELETE_TODOLIST(state) {
      let index_todolist = state.todolists
        .map(function(e) {
          return e.id;
        })
        .indexOf(state.displayed_todolist.id);
      state.displayed_todolist = {
        id: 0,
        name: "Clique sur une todolist à gauche pour l'afficher",
        tasks: {},
      };
      state.todolists.splice(index_todolist, 1);
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
      fetch("/ted-api/todolists/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "name=Une nouvelle todo"
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let new_todolist = data.todolist;
        new_todolist.tasks = [];
        context.commit("ADD_NEW_TODOLIST", new_todolist);
        context.commit("SET_DISPLAYED_TODOLIST", new_todolist);
      });
    },
    addNewTask(context) {
      let new_task = {
        id: 8,
        task: "Nouvelle tâche",
        completed: false,
        todolist: context.state.displayed_todolist.id,
      };
      context.commit("ADD_NEW_TASK", new_task);
      // TODO Add online !!
    },
    addTask(context, payload) {
      context.commit("ADD_NEW_TASK", payload);
    },
    setEditMode(context) {
      if (context.state.edit) {
        context.commit("EXIT_EDIT_MODE");
        // TODO Save online !!
      } else {
        context.commit("ENTER_EDIT_MODE");
      }
    },
    setDeleteMode(context, payload) {
      if (payload.message) {
        context.commit("ENTER_DELETE_MODE");
      } else {
        context.commit("EXIT_DELETE_MODE");
      }
    },
    deleteTask(context, payload) {
      context.commit("DELETE_TASK", payload);
      // TODO Delete
    },
    deleteTodoList(context) {
      context.commit("DELETE_TODOLIST");
      // TODO Delete
      context.commit("EXIT_DELETE_MODE");
    } 
  },
  modules: {},
});
