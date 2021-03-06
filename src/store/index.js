import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        search: null,
        tasks: [
            { id: 1, title: "Wake up", done: true, dueDate: "2020-11-14" },
            {
                id: 2,
                title: "Clean the room",
                done: false,
                dueDate: "2020-10-15"
            },
            { id: 3, title: "Home work", done: false, dueDate: null }
        ],
        snackbar: { show: false, text: "Hello" }
    },
    mutations: {
        setSearch(state, value) {
            //console.log(value);
            state.search = value;
        },
        addTask(state, newTaskTitle) {
            //console.log("add task");
            let newTask = {
                id: Date.now(),
                title: newTaskTitle,
                done: false,
                dueDate: null
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

        updateTask(state, payload) {
            //console.log(payload);
            let task = state.tasks.filter(task => task.id === payload.id)[0];
            task.title = payload.title;
        },
        updateDueDate(state, payload) {
            //console.log(payload);
            let task = state.tasks.filter(task => task.id === payload.id)[0];
            task.dueDate = payload.dueDate;
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
        },
        hideSnackbar(state) {
            state.snackbar.show = false;
        }
    },
    actions: {
        //2つ以上のmutationを実行する場合にはactions
        addTask({ commit }, newTaskTitle) {
            commit("addTask", newTaskTitle);
            commit("showSnackbar", "Task Added!");
        },
        deleteTask({ commit }, id) {
            commit("deleteTask", id);
            commit("showSnackbar", "Task Deleted");
        },
        updateTask({ commit }, payload) {
            commit("updateTask", payload);
            commit("showSnackbar", "Task updated");
        },
        updateDueDate({ commit }, payload) {
            commit("updateDueDate", payload);
            commit("showSnackbar", "Task updated");
        }
    },
    modules: {},
    getters: {
        tasksFiltered(state) {
            if (!state.search) {
                return state.tasks;
            }
            return state.tasks.filter(task => {
                return task.title
                    .toLowerCase()
                    .includes(state.search.toLowerCase()); // task=>{return }が必要
            });
        }
    }
});
