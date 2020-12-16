<template>
    <v-dialog :value="true" persistent max-width="290">
        <v-card>
            <v-card-title class="headline"> Edit Task! </v-card-title>
            <v-card-text>
                Title:
                <v-text-field v-model="taskTitle" @keyup.enter="saveTask" />
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="$emit('close')">
                    Cancel
                </v-btn>
                <v-btn
                    color="red darken-1"
                    text
                    @click="saveTask"
                    :disabled="!taskTitle || taskTitle === task.title"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ["task"],
    data() {
        return {
            taskTitle: null
        };
    },
    methods: {
        saveTask() {
            let payload = { id: this.task.id, title: this.taskTitle };
            this.$store.commit("updateTask", payload);
            this.$emit("close");
        }
    },
    mounted() {
        this.taskTitle = this.task.title;
    }
};
</script>

<style></style>
