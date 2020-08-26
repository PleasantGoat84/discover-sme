<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12">
        <EventCarousel />
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <v-card> </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EventCarousel from "@/components/home/EventCarousel.vue";

@Component({
  components: {
    EventCarousel
  }
})
export default class Home extends Vue {}
</script>
