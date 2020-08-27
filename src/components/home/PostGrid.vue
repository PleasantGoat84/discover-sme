<template>
  <v-card color="#FAF7B2" class="mx-2">
    <v-card-title>
      <v-icon>mdi-chart-line</v-icon>
      <span class="ml-1">人氣分享</span>
    </v-card-title>

    <v-container fluid class="px-2">
      <v-row dense>
        <v-col v-for="(post, i) in hotPosts" :key="i" cols="6">
          <router-link
            :to="{
              path: '/post',
              query: {
                id: post.id
              }
            }"
          >
            <v-img
              :src="post.img.url"
              class="white--text rounded elevation-3"
              gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.65)"
              height="25vw"
              v-ripple
              transition="scale-transition"
            >
              <span class="post-caption text-truncate">{{ post.name }}</span>
              <span class="post-popularity d-flex align-center">
                <v-icon color="#ff80ab" small class="mr-1"
                  >mdi-heart-outline</v-icon
                >
                {{ post.popularity }}
              </span>
            </v-img>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { HotPost } from "@/types.ts";

@Component
export default class PostGrid extends Vue {
  private hotPosts: Array<HotPost> = [];

  created() {
    // do something with the api
    for (let i = 0; i < 12; i++) {
      this.hotPosts.push({
        name: `${i} 號中小企`,
        id: i,
        popularity: Math.floor(Math.random() * (100 - i)),
        img: {
          url: "http://via.placeholder.com/1600x900"
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.post-caption,
.post-popularity {
  position: absolute;
  left: 0.5em;
  bottom: 0.5em;

  max-width: 45%;

  font-size: 3vw;
}
.post-popularity {
  color: #ff80ab;

  left: unset;
  right: 0.5em;

  font-size: 4vw;
}
</style>
