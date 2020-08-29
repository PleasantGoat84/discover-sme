<template>
  <v-carousel continuous cycle hide-delimiters height="25vh">
    <v-carousel-item
      v-for="(event, i) in events"
      :key="i"
      :src="event.carouselImg.url"
      :to="{ path: '/event', query: { id: event.id } }"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { SmeEvent } from "@/types.ts";

import { fakeApiEventCarousel } from "@/fake-api.ts";

@Component
export default class EventCarousel extends Vue {
  private events: Array<SmeEvent> = [];

  created() {
    // do something with the api
    this.events = fakeApiEventCarousel();
  }
}
</script>
