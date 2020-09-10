<template>
  <v-card color="lite">
    <v-list-item>
      <router-link :to="{ path: '/user', query: { id: post.author.id } }">
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
      </router-link>

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
      height="55vw"
      :show-arrows="post.img.length > 1"
      hide-delimiters
      style="background-color: white;"
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
      <v-btn
        text
        color="primary"
        :to="{ path: '/view', query: { id: post.sme.id } }"
      >
        查看中小企
      </v-btn>

      <v-spacer />

      <v-btn
        text
        :color="post.liked ^ toggleLike ? 'pink' : 'grey'"
        @click="like(post)"
      >
        <v-icon>mdi-heart</v-icon>
        <span class="ml-1">{{ pop }}</span>
      </v-btn>

      <v-btn icon @click="share(post)" v-if="shareAvailable">
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Post } from "@/types.ts";

@Component
export default class PostCard extends Vue {
  @Prop() private post!: Post;

  get pop(): number {
    const original = this.post.popularity;

    if (this.post.liked && this.toggleLike) {
      return original - 1;
    }
    if (!this.post.liked && this.toggleLike) {
      return original + 1;
    }
    return original;
  }

  get shareAvailable(): boolean {
    return navigator.share !== undefined;
  }

  private toggleLike = false;

  private like(): void {
    console.debug(`toggle like of post number ${this.post.id}`);
    this.toggleLike = !this.toggleLike;

    // this.post.popularity += this.post.liked ? -1 : 1;
    // this.post.liked = !this.post.liked;
  }

  private share(): void {
    console.debug(`share post number ${this.post.id}`);

    navigator.share({
      title: this.post.name,
      text: `${this.post.name} - 發現中小企`,
      url: `${window.location.origin}/post?id=${this.post.id}`
    });
  }
}
</script>
