<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" :mobile-breakpoint="760" app>
            <v-img
                class="pa-4 pt-7"
                height="170"
                src="mountains.jpg"
                gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
            >
                <v-avatar size="70" class="mb-2">
                    <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                    />
                </v-avatar>
                <div class="white--text text-subtitle-1 font-weight-bold">
                    Danny Connell
                </div>
                <div class="white--text text-subtitle-2">dan_connell</div>
            </v-img>

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

        <v-app-bar
            app
            color="primary"
            dark
            prominent
            height="170"
            src="mountains.jpg"
        >
            <template #img="{ props }">
                <v-img
                    v-bind="props"
                    gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
                />
            </template>

            <v-container class="header-container pa-0">
                <v-row>
                    <v-app-bar-nav-icon @click="drawer = !drawer" />
                    <v-spacer />
                    <search />
                </v-row>
                <v-row>
                    <v-toolbar-title class="ml-4 text-h4">
                        Application
                    </v-toolbar-title>
                </v-row>
                <v-row>
                    <live-date-time />
                </v-row>
            </v-container>
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
        search: require("@/components/Tools/Search.vue").default,
        "live-date-time": require("@/components/Tools/LiveDateTime.vue").default
    }
};
</script>

<style lang="sass">
.header-container
    max-width: none !important
</style>
