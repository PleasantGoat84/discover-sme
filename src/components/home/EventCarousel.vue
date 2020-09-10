<template>
  <v-carousel
    continuous
    cycle
    hide-delimiters
    height="max(33vh,min(50vw,310px))"
    style="background-color: #c7ebff;"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.carouselImg.url"
      :to="item.carouselLink"
      contain
    />
  </v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { CarouselItem } from "@/types.ts";

import { fakeApiCarousel } from "@/fake-api.ts";

@Component
export default class EventCarousel extends Vue {
  private items: Array<CarouselItem> = [];

  created() {
    // do something with the api
    this.items = fakeApiCarousel();
  }
}
</script>
