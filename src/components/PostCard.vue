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
        @click="openImgDialog(img.url)"
      />
    </v-carousel>

    <v-card-text style="white-space: pre-line;">
      {{ textCollapsed ? collapsedText : post.content }}

      <div class="d-flex justify-end" v-if="collapseEnabled">
        <v-btn text color="info" @click="textCollapsed = !textCollapsed" small>
          {{ textCollapsed ? "更多" : "收起" }}
        </v-btn>
      </div>
    </v-card-text>

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

    <v-dialog v-model="imgDialog" overlay-opacity="0.95">
      <v-img :src="dialogImgSrc" />
    </v-dialog>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Post } from "@/types.ts";

@Component
export default class PostCard extends Vue {
  @Prop() private post!: Post;

  private textCollapsed = true;
  private readonly collapseValue = 75;

  private imgDialog = false;
  private dialogImgSrc = "";

  private openImgDialog(src: string) {
    this.imgDialog = true;
    this.dialogImgSrc = src;
  }

  get collapseEnabled(): boolean {
    return this.post.content.length > this.collapseValue;
  }

  get collapsedText(): string {
    if (this.post.content.length <= this.collapseValue)
      return this.post.content;
    return this.post.content.substr(0, this.collapseValue) + "......";
  }

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
