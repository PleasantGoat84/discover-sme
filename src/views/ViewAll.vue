<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-card color="lite" tile min-height="95vh">
        <v-card-title class="info white--text py-3">
          <v-btn icon color="white" class="mr-5" @click="$router.go(-1)" small>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          中小企目錄
        </v-card-title>

        <SmeTable />
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import SmeTable from "@/components/view-all/SmeTable.vue";

@Component({ components: { SmeTable } })
export default class ViewAll extends Vue {}
</script>
