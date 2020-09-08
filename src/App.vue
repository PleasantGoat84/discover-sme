<template>
  <v-app>
    <TopAppBar />

    <!-- Sizes your content based upon application components -->
    <v-main class="pb-5">
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="px-0 pt-14">
        <router-view />

        <v-row no-gutters>
          <v-col cols="12">
            <FooterCard />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app absolute color="primary" dark>
      &copy; TerryCCI
    </v-footer>

    <v-snackbar v-model="snackbar" timeout="-1">
      推薦使用豎屏瀏覽

      <template v-slot:action="{ attrs }">
        <v-btn icon color="pink" v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TopAppBar from "@/components/TopAppBar.vue";
import FooterCard from "@/components/FooterCard.vue";

@Component({
  components: {
    TopAppBar,
    FooterCard
  }
})
export default class DiscoverSme extends Vue {
  private snackbar = false;

  created(): void {
    this.getOrientation();

    window.addEventListener("orientationchange", () => {
      this.getOrientation();
    });
  }

  private getOrientation(): void {
    if (screen.orientation.type.includes("landscape")) this.snackbar = true;
    else this.snackbar = false;
  }
}
</script>

<style lang="scss">
#app {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #445259;
  background-color: #a0cef5;
}
a {
  text-decoration: none;
}
</style>
