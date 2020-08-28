<template>
  <v-card tile class="py-3" color="info" dark>
    <v-icon id="decoration-icon" color="#A5A7B4">mdi-map-search-outline</v-icon>

    <v-card-title>附近有甚麼?</v-card-title>
    <v-card-subtitle>
      通過獲取目前定位檢索附近的人氣中小企
    </v-card-subtitle>
    <v-card-actions>
      <v-spacer />
      <v-btn outlined color="primary" dark to="/view-near">
        探測附近中小企
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NearBySmes extends Vue {}
</script>

<style lang="scss" scoped>
$decoration-icon-size: 8em;

.v-card {
  padding-left: $decoration-icon-size * 0.7;
  min-height: $decoration-icon-size;

  #decoration-icon {
    position: absolute;
    font-size: $decoration-icon-size;
    left: -0.25em;
    bottom: 5%;
  }
}
</style>
