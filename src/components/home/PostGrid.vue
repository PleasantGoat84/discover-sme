<template>
  <v-card class="mx-2" color="#FDFB8F">
    <v-btn absolute top right small dark color="info">
      查看全部
      <v-icon small>mdi-chevron-right</v-icon>
    </v-btn>

    <v-card-title>
      <v-icon color="primary">mdi-chart-line</v-icon>
      <span class="ml-1">人氣分享</span>
    </v-card-title>

    <v-container fluid class="px-2">
      <v-row dense>
        <v-col v-for="(post, i) in hotPosts" :key="i" cols="6" class="mb-1">
          <router-link
            :to="{
              path: '/post',
              query: {
                id: post.id
              }
            }"
            class="text-decoration-none"
          >
            <v-img
              :src="post.img[0].url"
              class="rounded elevation-3"
              gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.65)"
              height="25vw"
              v-ripple
              transition="scale-transition"
            >
              <span class="post-popularity d-flex align-center caption">
                <v-icon color="#ff80ab" small class="mr-1">
                  mdi-heart-outline
                </v-icon>
                {{ post.popularity }}
              </span>
            </v-img>

            <span class="d-block caption text-truncate info--text">
              {{ post.name }}
            </span>
          </router-link>
        </v-col>

        <v-col cols="12" class="text-center mt-5">
          <v-btn color="primary">
            撰寫我的分享
            <v-icon class="ml-1">mdi-pencil</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { HotPost } from "@/types.ts";

import { fakeApiHotPosts } from "@/fake-api.ts";

@Component
export default class PostGrid extends Vue {
  private hotPosts: Array<HotPost> = [];

  created() {
    // do something with the api
    this.hotPosts = fakeApiHotPosts();
  }
}
</script>

<style lang="scss" scoped>
// .post-caption,
.post-popularity {
  position: absolute;

  bottom: 0.5em;
  right: 0.5em;

  color: #ff80ab;
  font-size: 4vw;
}
</style>
