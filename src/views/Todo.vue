<template>
    <div class="home pa-0">
        <field-add-task></field-add-task>
        <v-list v-if="$store.state.tasks.length" class="pt-0" flat>
            <div v-for="task in $store.state.tasks" :key="task.id">
                <v-list-item
                    :class="{ 'blue lighten-5': task.done }"
                    @click="$store.commit('doneTask', task.id)"
                >
                    <template #default>
                        <v-list-item-action>
                            <v-checkbox
                                :input-value="task.done"
                                color="primary"
                            />
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title
                                :class="{
                                    'text-decoration-line-through': task.done
                                }"
                            >
                                {{ task.title }}
                            </v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn
                                icon
                                @click.stop="
                                    $store.commit('deleteTask', task.id)
                                "
                            >
                                <v-icon color="primary lighten-1">
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </template>
                </v-list-item>
                <v-divider />
            </div>
        </v-list>
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
        "field-add-task": require("@/components/Todo/FieldAddTask.vue").default
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
