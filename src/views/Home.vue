<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12">
        <EventCarousel />
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" v-for="(sme, i) in hotSmes" :key="i">
        <HotSmeCard
          :sme="sme"
          class="ma-1"
          :class="i % 2 ? 'mr-n1' : 'ml-n1'"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EventCarousel from "@/components/home/EventCarousel.vue";
import HotSmeCard from "@/components/home/HotSmeCard.vue";

export type HotSme = {
  name: string;
  id: number;
  rank: number;
  popularity: number;
  imgs: Array<{ url: string }>;
};

@Component({
  components: {
    EventCarousel,
    HotSmeCard
  }
})
export default class Home extends Vue {
  private hotSmes: Array<HotSme> = [];

  created() {
    // do something with the api
    this.hotSmes = [
      {
        name: "甲甲甲咖啡室",
        id: 567,
        rank: 1,
        popularity: 9487,
        imgs: [
          { url: "http://via.placeholder.com/400x300" },
          { url: "http://via.placeholder.com/500x200" },
          { url: "http://via.placeholder.com/200x300" },
          { url: "http://via.placeholder.com/500x300" },
          { url: "http://via.placeholder.com/400x200" },
          { url: "http://via.placeholder.com/400x300" },
          { url: "http://via.placeholder.com/400x300" }
        ]
      },
      {
        name: "乙乙工作坊",
        id: 365,
        rank: 2,
        popularity: 8547,
        imgs: [
          { url: "http://via.placeholder.com/400x300" },
          { url: "http://via.placeholder.com/400x300" },
          { url: "http://via.placeholder.com/400x300" },
          { url: "http://via.placeholder.com/400x300" },
          { url: "http://via.placeholder.com/400x300" }
        ]
      },
      {
        name: "丙丙鮮花",
        id: 848,
        rank: 3,
        popularity: 6253,
        imgs: [
          { url: "http://via.placeholder.com/400x300" },
          { url: "http://via.placeholder.com/400x300" },
          { url: "http://via.placeholder.com/400x300" },
          { url: "http://via.placeholder.com/400x300" },
          { url: "http://via.placeholder.com/400x300" },
          { url: "http://via.placeholder.com/400x300" }
        ]
      }
    ];
  }
}
</script>

<style lang="scss">
.hot-sme-imgs {
  overflow-x: scroll;
  width: 100%;

  img {
    max-height: 20vh;
  }
}
</style>
