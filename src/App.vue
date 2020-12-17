<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Vuetify Todo
                    </v-list-item-title>
                    <v-list-item-subtitle>Your task!</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider />

            <v-list dense nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.to"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="primary" dark prominent src="mountains.jpg">
            <template #img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
                />
            </template>

            <v-app-bar-nav-icon @click="drawer = !drawer" />

            <v-toolbar-title>Application</v-toolbar-title>

            <v-spacer />
            <search />
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view />
            <snackbar />
            <!--  -->
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: null,
        items: [
            { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
            { title: "About", icon: "mdi-help-box", to: "/about" }
        ]
    }),
    components: {
        snackbar: require("@/components/Shared/Snackbar.vue").default,
        search: require("@/components/Tools/Search.vue").default
    }
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Material+Icons";
</style>
