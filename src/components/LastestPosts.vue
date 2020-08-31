<template>
  <v-card color="#ECE0D6" tile>
    <v-container fluid>
      <v-row>
        <v-col cols="12" v-for="(post, i) in latestPosts" :key="i">
          <v-card color="lite">
            <v-list-item>
              <v-list-item-avatar color="info">
                <v-img
                  :src="
                    post.author.avatar
                      ? post.author.avatar.url
                      : require('@/assets/default-avatar.png')
                  "
                  contain
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="info--text">
                  {{ post.name }}
                </v-list-item-title>

                <v-list-item-subtitle>
                  {{ post.author.name }}
                  <span class="text--disabled"> · {{ post.postDate }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-carousel
              hide-delimiter-background
              :show-arrows="false"
              height="55vw"
              :hide-delimiters="post.img.length <= 1"
            >
              <v-carousel-item
                v-for="(img, j) in post.img"
                :key="j"
                :src="img.url"
                contain
              />
            </v-carousel>

            <v-card-text v-text="post.content" style="white-space: pre-line;" />

            <v-card-actions>
              <v-btn text color="primary">
                查看中小企
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon :color="post.liked ? 'pink' : ''">
                <v-icon>mdi-heart</v-icon>
                <span class="ml-1">{{ post.popularity }}</span>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Post } from "@/types.ts";
import { fakeApiPosts } from "@/fake-api";

@Component
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
