<template>
    <v-text-field
        :value="$store.state.search"
        @input="$store.commit('setSearch', $event)"
        @focus="searchClosed = false"
        @blur="searchClosed = true"
        class="expanding-search mt-1"
        placeholder="Search"
        filled
        dense
        clearble
        prepend-inner-icon="mdi-magnify"
    ></v-text-field>
</template>

<script>
export default {
    data() {
        return { searchClosed: true };
    }
};
</script>

<style lang="sass">
.expanding-search
    .v-input__slot
        &:before, &:after
            border-color: transparent !important
        &.closed
            max-width: 10px
</style>
