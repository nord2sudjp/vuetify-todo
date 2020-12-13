/* eslint-disable vue/max-attributes-per-line */
<template>
  <div class="home pa-0">
    <v-text-field
      v-model="newTaskTitle"
      solo
      label="Add Task"
      append-icon="mdi-plus"
      class="pa-3"
      hide-details
      clearable
      @click:append="addTask"
      @keyup.enter="addTask"
    />
    <v-list flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item
          :class="{ 'blue lighten-5': task.done }"
          @click="doneTask(task.id)"
        >
          <template #default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary" />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click.stop="deleteTask(task.id)">
                <v-icon color="primary lighten-1"> mdi-delete </v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider />
      </div>
    </v-list>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      newTaskTitle: "",
      tasks: [
        // { id: 1, title: "Wake up", done: true },
        // { id: 2, title: "Clean the room", done: false },
        // { id: 3, title: "Home work", done: false },
      ],
    };
  },
  methods: {
    addTask() {
      //console.log("add task");
      let newTask = { id: Date.now(), title: this.newTaskTitle, done: false };
      this.tasks.push(newTask);
      this.newTaskTitle = "";
    },
    doneTask(id) {
      //console.log("id:" + id);
      let task = this.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
};
</script>
