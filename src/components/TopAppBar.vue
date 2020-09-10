<template>
  <div>
    <v-app-bar color="primary" dark dense fixed>
      <div class="d-flex">
        <router-link to="/home">
          <v-img
            contain
            width="50"
            :src="require('@/assets/icon.png')"
            class="shrink"
          />
        </router-link>
      </div>

      <v-text-field
        v-model="searchText"
        placeholder="搜索中小企"
        hide-details
        clearable
        append-outer-icon="mdi-magnify"
        @click:append-outer="search"
        class="mx-2"
      />

      <v-divider vertical class="mx-1" />

      <v-btn icon to="/upload">
        <v-icon>mdi-upload</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopAppBar extends Vue {
  private searchText = "";

  private search(): void {
    console.debug("Search:", this.searchText);
  }
}
</script>
