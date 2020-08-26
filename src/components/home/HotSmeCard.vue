<template>
  <v-card class="pb-1" color="#f2f1e2">
    <v-card-title>
      <v-img
        :src="getSmeIcon(sme.category)"
        width="1.5em"
        class="shrink mr-2"
      />

      {{ sme.name }}
    </v-card-title>
    <v-card-subtitle class="d-flex align-center">
      熱門中小企 #{{ sme.rank }}

      <v-img src="@/assets/fire.png" width="1.25em" class="mt-n1 ml-1 shrink" />
    </v-card-subtitle>

    <div class="d-flex hot-sme-imgs">
      <img
        :src="img.url"
        :alt="sme.name"
        v-for="(img, i) in sme.imgs"
        :key="i"
        class="mx-1"
      />
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import { HotSme, SmeCategory } from "@/types.ts";

@Component
export default class HotSmeCard extends Vue {
  @Prop() private sme!: HotSme;

  private icons: { [key: string]: string } = {};

  getSmeIcon(category: SmeCategory): string {
    const filePath = `./${SmeCategory[category].toLowerCase()}.png`;
    return filePath in this.icons
      ? this.icons[filePath]
      : require("@/assets/sme-icon/other.png");
  }

  created() {
    // use some diguesting way to map hashed file path
    // https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
    const r = require.context("@/assets/sme-icon", false, /\.png$/);
    r.keys().forEach(key => {
      this.icons[key] = r(key);
    });
  }
}
</script>
