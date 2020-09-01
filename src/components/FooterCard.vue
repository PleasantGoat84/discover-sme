<template>
  <v-card tile>
    <v-list color="secondary" dark class="py-3">
      <v-list-item-group>
        <router-link
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          class="white--text"
        >
          <v-list-item class="pl-5">
            <v-list-item-content>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FooterCard extends Vue {
  private links: Array<{ text: string; to: object | string }> = [
    { text: "上傳中小企分享", to: "/upload" },
    { text: "中小企目錄", to: "/view-all" },
    { text: "活動一覽", to: "/events" },
    { text: "全部分享", to: "/posts" },
    { text: "附近中小企", to: "/view-near" }
  ];
}
</script>
