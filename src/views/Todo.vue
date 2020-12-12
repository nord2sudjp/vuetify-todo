<template>
  <div class="home pa-0">
    <v-list flat>
      <div v-for="task in tasks" :key="task.id">
        <v-list-item :class="{ blue: task.done }" @click="doneTask(task.id)">
          <template #default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary" />
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ task.title }}</v-list-item-title>
            </v-list-item-content>
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
  name: 'Home',
  data() {
    return {
      tasks: [
        { id: 1, title: 'Wake up', done: true },
        { id: 2, title: 'Clean the room', done: false },
        { id: 3, title: 'Home work', done: false },
      ],
    }
  },
  methods: {
    doneTask(id) {
      //console.log("id:" + id);
      let task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
  },
}
</script>
