<template>
  <v-card color="#ECE0D6" tile>
    <v-container fluid>
      <v-row>
        <v-col cols="12" v-for="(post, i) in latestPosts" :key="i">
          <PostCard :post="post" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Post } from "@/types.ts";
import { fakeApiPosts } from "@/fake-api";

import PostCard from "@/components/PostCard.vue";

@Component({ components: { PostCard } })
export default class LastestPosts extends Vue {
  private posts: Array<Post> = [];

  get latestPosts(): Array<Post> {
    return this.posts.slice(0, 5);
  }

  created() {
    // do something with the api
    this.posts = fakeApiPosts();
  }
}
</script>

<style lang="scss" scoped>
.v-carousel {
  background-color: #f7edb3;
}

.v-list-item__title {
  white-space: normal;
}
</style>
