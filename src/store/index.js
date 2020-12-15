import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [
            { id: 1, title: "Wake up", done: true },
            { id: 2, title: "Clean the room", done: false },
            { id: 3, title: "Home work", done: false }
        ],
        snackbar: { show: false }
    },
    mutations: {
        addTask(state, newTaskTitle) {
            //console.log("add task");
            let newTask = {
                id: Date.now(),
                title: newTaskTitle,
                done: false
            };
            state.tasks.push(newTask);
        },
        doneTask(state, id) {
            //console.log("id:" + id);
            let task = state.tasks.filter(task => task.id === id)[0];
            task.done = !task.done;
        },
        deleteTask(state, id) {
            state.tasks = state.tasks.filter(task => task.id !== id);
        },
        showSnackbar(state) {
            state.snackbar.show = true;
        }
    },
    actions: {
        addTask({ commit }, newTaskTitle) {
            commit("addTask", newTaskTitle);
            commit("showSnackbar");
        },
        deleteTask({ commit }, id) {
            commit("deleteTask", id);
            commit("showSnackbar");
        }
    },
    modules: {}
});
