<template>
  <v-app>
    <TopAppBar />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="px-0 pt-14">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TopAppBar from "@/components/TopAppBar.vue";

@Component({
  components: {
    TopAppBar
  }
})
export default class DiscoverSme extends Vue {}
</script>

<style lang="scss">
#app {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #cad7d9;
}
</style>
