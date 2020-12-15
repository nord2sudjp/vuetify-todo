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
        snackbar: { show: false, text: "Hello" }
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
        showSnackbar(state, text) {
            let timeout = 0;
            if (state.snackbar.show) {
                state.snackbar.show = false;
                timeout = 300;
            }

            setTimeout(() => {
                state.snackbar.show = true;
                state.snackbar.text = text;
            }, timeout);
        }
    },
    actions: {
        addTask({ commit }, newTaskTitle) {
            commit("addTask", newTaskTitle);
            commit("showSnackbar", "Task Added!");
        },
        deleteTask({ commit }, id) {
            commit("deleteTask", id);
            commit("showSnackbar", "Task Deleted");
        }
    },
    modules: {}
});
