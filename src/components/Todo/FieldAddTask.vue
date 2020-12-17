<template>
    <v-text-field
        v-model="newTaskTitle"
        solo
        label="Add Task"
        class="pa-3"
        hide-details
        clearable
        @click:append="addTask"
        @keyup.enter="addTask"
    >
        <template v-slot:append>
            <v-icon
                @click="addTask"
                color="primary"
                :disabled="!newTaskInvalid"
            >
                mdi-plus
            </v-icon>
        </template>
    </v-text-field>
</template>

<script>
export default {
    data() {
        return {
            newTaskTitle: ""
            //tasks: []
        };
    },
    computed: {
        taskTitleInvalid() {
            return !this.newTaskTitle; // templateではthisはいらない
        }
    },
    methods: {
        addTask() {
            if (!this.newTaskTitleInvalid)
                this.$store.dispatch("addTask", this.newTaskTitle);
            this.newTaskTitle = "";
        }
    }
};
</script>
