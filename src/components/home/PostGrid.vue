<template>
  <v-card color="#FAF7B2" class="mx-2">
    <v-btn outlined absolute top right small>
      查看全部
      <v-icon small>mdi-chevron-right</v-icon>
    </v-btn>

    <v-card-title>
      <v-icon>mdi-chart-line</v-icon>
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
              :src="post.img.url"
              class="white--text rounded elevation-3"
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
          <v-btn color="accent">
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

@Component
export default class PostGrid extends Vue {
  private hotPosts: Array<HotPost> = [];

  created() {
    // do something with the api
    for (let i = 0; i < 12; i++) {
      this.hotPosts.push({
        name: [
          "甲甲甲飲食體驗!",
          "乙乙實作心得",
          "丙丙飲品好甜~",
          "甲甲甲餐牌分享",
          "乙乙手作材料準備",
          "丙丙新品推薦"
        ][Math.floor(Math.random() * 5.9)],
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
// .post-caption,
.post-popularity {
  position: absolute;

  bottom: 0.5em;
  right: 0.5em;

  color: #ff80ab;
  font-size: 4vw;
}
</style>
