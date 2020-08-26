<template>
  <v-card class="pb-1">
    <v-card-title>{{ sme.name }}</v-card-title>
    <v-card-subtitle>熱門中小企 #{{ sme.rank }}</v-card-subtitle>

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

import { HotSme } from "@/types.ts";

@Component
export default class HotSmeCard extends Vue {
  @Prop() private sme!: HotSme;
}
</script>
