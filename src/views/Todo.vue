<template>
    <div class="home pa-0">
        <field-add-task></field-add-task>
        <list-tasks v-if="$store.state.tasks.length"></list-tasks>
        <no-tasks v-else></no-tasks>
    </div>
</template>

<script>
export default {
    name: "Home",

    components: {
        "field-add-task": require("@/components/Todo/FieldAddTask.vue").default,
        "list-tasks": require("@/components/Todo/ListTasks.vue").default,
        "no-tasks": require("@/components/Todo/NoTasks.vue").default
    }
};
</script>
