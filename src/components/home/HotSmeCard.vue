<template>
  <v-card class="pb-1" color="lite">
    <v-btn icon absolute top right color="info" @click="openMap">
      <v-icon>mdi-map-search</v-icon>
    </v-btn>

    <router-link :to="{ path: '/info', query: { id: sme.id } }">
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

        <v-img
          src="@/assets/fire.png"
          width="1.25em"
          class="mt-n1 ml-1 shrink"
          v-if="sme.rank <= 3"
        />
      </v-card-subtitle>
    </router-link>

    <div class="d-flex hot-sme-imgs">
      <img
        :src="img.url"
        :alt="sme.name"
        v-for="(img, i) in sme.imgs"
        :key="i"
        class="mx-1 elevation-3"
        @click="openImgDialog(img.url)"
        style="cursor: pointer;"
      />
    </div>

    <v-dialog v-model="imgDialog" overlay-opacity="0.95">
      <v-img :src="dialogImgSrc" />
    </v-dialog>

    <v-dialog v-model="mapDialog" overlay-opacity="0.95">
      <iframe
        :src="
          `https://www.google.com/maps/embed/v1/place?key=${mapApiKey}&q=${sme.gPos.latitude},${sme.gPos.longitude}`
        "
        style="height: 100vh;"
      />
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import { HotSme, SmeCategory, SmeWithGPos } from "@/types.ts";

@Component
export default class HotSmeCard extends Vue {
  @Prop() private sme!: HotSme & SmeWithGPos;

  private imgDialog = false;
  private dialogImgSrc = "";

  private mapDialog = false;
  private readonly mapApiKey = "AIzaSyDnO6mwzdpsVUleCd-jOHT1kCApjM6IMaI";

  private icons: { [key: string]: string } = {};

  private openImgDialog(src: string) {
    this.imgDialog = true;
    this.dialogImgSrc = src;
  }

  private openMap(): void {
    this.mapDialog = true;
  }

  getSmeIcon(category: SmeCategory): string {
    const filePath = `./${SmeCategory[category].toLowerCase()}.png`;
    return filePath in this.icons
      ? this.icons[filePath]
      : require("@/assets/sme-icon/other.png");
  }

  created() {
    // use some digusting way to map hashed file path
    // https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
    const r = require.context("@/assets/sme-icon", false, /\.png$/);
    r.keys().forEach(key => {
      this.icons[key] = r(key);
    });
  }
}
</script>
