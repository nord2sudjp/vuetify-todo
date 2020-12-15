<template>
    <div class="home pa-0">
        <field-add-task></field-add-task>
        <list-tasks v-if="$store.state.tasks.length"></list-tasks>
        <div v-else class="no-tasks">
            <v-icon size="100" color="primary darken-2">mdi-check</v-icon>
            <div class="text-h5 primary--text">No Tasks</div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",

    components: {
        "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
        "list-tasks": require("@/components/Todo/ListTasks.vue").default
    }
};
</script>

<style lang="sass">
.no-tasks
  position : absolute
  left : 50%
  top : 50%
    transform: translate(-50%, -50%)
</style>
