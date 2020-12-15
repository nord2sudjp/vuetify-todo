<template>
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
</template>

<script>
export default {
    data() {
        return {
            newTaskTitle: ""
            //tasks: []
        };
    },
    methods: {
        addTask() {
            this.$store.commit("addTask", this.newTaskTitle);
            this.newTaskTitle = "";
        }
    }
};
</script>

<style></style>
