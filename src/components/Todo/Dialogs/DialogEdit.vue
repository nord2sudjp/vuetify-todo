<template>
    <v-dialog :value="true" persistent max-width="290">
        <v-card>
            <v-card-title class="headline"> Edit Task! </v-card-title>
            <v-card-text>Title:<v-text-field v-model="taskTitle"/></v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="$emit('close')">
                    Cancel
                </v-btn>
                <v-btn color="red darken-1" text>
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
            taskTitle: "Test"
        };
    }
};
</script>

<style></style>
