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

@Component
export default class EventCarousel extends Vue {
  private events: Array<SmeEvent> = [];

  created() {
    // do something with the api
    for (let i = 1; i <= 10; i++)
      this.events.push({
        carouselImg: { url: "http://via.placeholder.com/400x200" },
        id: i
      });
  }
}
</script>
