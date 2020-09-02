<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12">
        <EventCarousel />
      </v-col>
    </v-row>

    <v-row no-gutters class="mb-2">
      <v-col cols="12" v-for="(sme, i) in hotSmes" :key="i">
        <HotSmeCard
          :sme="sme"
          class="ma-2"
          :class="i % 2 ? 'mr-n1' : 'ml-n1'"
        />
      </v-col>

      <v-col cols="12" class="my-4">
        <CardWithIcon
          tile
          icon="mdi-fire"
          icon-color="warning"
          icon-pos="right"
          color="white"
          class="py-4"
          elevation="5"
        >
          <v-card-title class="justify-center">
            更多<span class="error--text font-weight-bold">熱門</span>中小企?
          </v-card-title>

          <v-card-subtitle class="text-center">
            或者想要發現更多中小企?
          </v-card-subtitle>

          <v-card-actions class="justify-center">
            <v-btn rounded color="primary" dark to="/view-all">
              查看中小企目錄
            </v-btn>
          </v-card-actions>
        </CardWithIcon>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <PostGrid />
      </v-col>
    </v-row>

    <v-row no-gutters class="my-4">
      <v-col cols="12">
        <CardWithIcon
          tile
          icon="mdi-map-search"
          icon-color="white"
          color="info"
          class="py-3"
          dark
        >
          <v-card-title>附近有甚麼?</v-card-title>
          <v-card-subtitle>
            通過獲取目前定位檢索附近的人氣中小企
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer />
            <v-btn outlined color="white" dark to="/view-near">
              探測附近中小企
              <v-icon class="ml-1">mdi-radar</v-icon>
            </v-btn>
          </v-card-actions>
        </CardWithIcon>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <LastestPosts />
      </v-col>
    </v-row>

    <v-fab-transition>
      <v-btn
        fab
        fixed
        dark
        bottom
        right
        large
        color="accent"
        elevation="15"
        to="/upload"
      >
        <v-icon>mdi-upload</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { HotSme } from "@/types.ts";

import { fakeApiHotSmes } from "@/fake-api.ts";

import EventCarousel from "@/components/home/EventCarousel.vue";
import HotSmeCard from "@/components/home/HotSmeCard.vue";
import PostGrid from "@/components/home/PostGrid.vue";
import CardWithIcon from "@/components/CardWithIcon.vue";
import LastestPosts from "@/components/LastestPosts.vue";

@Component({
  components: {
    EventCarousel,
    HotSmeCard,
    PostGrid,
    CardWithIcon,
    LastestPosts
  }
})
export default class Home extends Vue {
  private hotSmes: Array<HotSme> = [];

  created() {
    // do something with the api
    this.hotSmes = fakeApiHotSmes();
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
