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
          class="ma-2"
          :class="i % 2 ? 'mr-n1' : 'ml-n1'"
          :data-aos="i % 2 ? 'fade-left' : 'fade-right'"
        />
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <PostGrid />
      </v-col>
    </v-row>

    <v-fab-transition>
      <v-btn fab fixed dark bottom right large color="info" elevation="15">
        <v-icon>mdi-upload</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { HotSme, SmeCategory } from "@/types.ts";

import * as AOS from "aos";

import EventCarousel from "@/components/home/EventCarousel.vue";
import HotSmeCard from "@/components/home/HotSmeCard.vue";
import PostGrid from "@/components/home/PostGrid.vue";

@Component({
  components: {
    EventCarousel,
    HotSmeCard,
    PostGrid
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
        ],
        category: SmeCategory.Cafe
      },
      {
        name: "乙乙工作坊",
        id: 365,
        rank: 2,
        popularity: 8547,
        imgs: [
          { url: "http://via.placeholder.com/1080x960" },
          { url: "http://via.placeholder.com/360x360" },
          { url: "http://via.placeholder.com/500x600" },
          { url: "http://via.placeholder.com/150x960" },
          { url: "http://via.placeholder.com/400x300" }
        ],
        category: SmeCategory.Other
      },
      {
        name: "丙丙飲品",
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
        ],
        category: SmeCategory.Drink
      }
    ];
  }

  mounted() {
    AOS.init();
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
