import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [
            { id: 1, title: "Wake up", done: true },
            { id: 2, title: "Clean the room", done: false },
            { id: 3, title: "Home work", done: false }
        ]
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
        }
    },
    actions: {},
    modules: {}
});
