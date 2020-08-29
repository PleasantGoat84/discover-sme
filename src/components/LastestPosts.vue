<template>
  <v-card color="#ECE0D6" tile>
    <v-container fluid>
      <v-row>
        <v-col cols="12" v-for="(post, i) in posts" :key="i">
          <v-card color="bg">
            <v-list-item>
              <v-list-item-avatar color="grey" />
              <v-list-item-content>
                <v-list-item-title class="headline info--text">
                  {{ post.name }}
                </v-list-item-title>

                <v-list-item-subtitle>
                  {{ post.author.name }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-carousel
              hide-delimiter-background
              :show-arrows="false"
              height="30vh"
            >
              <v-carousel-item
                v-for="(img, j) in post.img"
                :key="j"
                :src="img.url"
                contain
              />
            </v-carousel>

            <v-card-text>
              {{ post.content }}
            </v-card-text>

            <v-card-actions>
              <v-btn text color="primary">
                查看中小企
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
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

  created() {
    // do something with the api
    this.posts = fakeApiPosts();
  }
}
</script>
