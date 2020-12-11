<template>
  <div class="home pa-6">
    <v-list two-line flat> </v-list>

    <v-divider></v-divider>

    <v-list subheader flat>
      <v-list-item>
        <template v-slot:default="{ active }">
          <v-list-item-action>
            <v-checkbox :input-value="active" color="primary"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Todo",
};
</script>
