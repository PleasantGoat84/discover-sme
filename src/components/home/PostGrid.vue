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
              height="25vw"
              v-ripple
              transition="scale-transition"
            >
              <v-btn x-small tile color="lite" class="post-popularity">
                <v-icon color="#ff80ab" small class="mr-1">
                  {{ post.liked ? "mdi-heart" : "mdi-heart-outline" }}
                </v-icon>
                {{ post.popularity }}
              </v-btn>
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

import { Post } from "@/types.ts";

import { fakeApiHotPosts } from "@/fake-api.ts";

@Component
export default class PostGrid extends Vue {
  private hotPosts: Array<Post> = [];

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

  bottom: 0;
  right: 0;

  color: #ff80ab;
  border-top-left-radius: 4px;
}
</style>
