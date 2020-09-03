<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-card color="lite" tile>
        <v-card-title class="info white--text py-3">
          <v-btn icon color="white" class="mr-5" @click="$router.go(-1)" small>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          上傳分享
        </v-card-title>

        <v-card-text class="pt-4">
          <v-form ref="uploadForm" v-model="isFormValid">
            <v-text-field
              label="中小企名稱"
              prepend-inner-icon="mdi-domain"
              :rules="[v => (v || '').length > 0 || '請輸入中小企名稱']"
            />

            <v-textarea filled name="content" label="分享內容" class="mt-3" />

            <v-text-field
              label="中小企位置"
              prepend-inner-icon="mdi-map-marker"
              messages="按此自動取得當前定位"
              :rules="[gPosValidator]"
            >
              <template v-slot:message="{ message }">
                <v-btn
                  text
                  small
                  @click="getPos"
                  color="blue"
                  v-if="!gPos"
                  class="pa-0"
                >
                  {{ message }}
                </v-btn>
                <template v-else>
                  已取得當前定位, 你亦可以填寫更準確的地址
                </template>
              </template>
            </v-text-field>

            <ImgGrid class="mt-5" ref="imgGrid" />
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-center pb-10 mt-3">
          <v-btn
            color="primary"
            large
            class="px-4"
            :disabled="!(isFormValid && $refs.imgGrid.isValid)"
            @click="upload"
            >發佈分享</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImgGrid from "@/components/upload/ImgGrid.vue";

@Component({ components: { ImgGrid } })
export default class Upload extends Vue {
  private gPos: Position | null = null;

  private isFormValid = false;

  // get the current position
  private getPos(): void {
    navigator.geolocation.getCurrentPosition(pos => {
      this.gPos = pos;

      // vuetify and typescript
      (this.$refs.uploadForm as Vue & { validate: () => void }).validate();
    });
  }

  private gPosValidator(value: string | undefined): boolean | string {
    return !((value || "").length === 0 && this.gPos === null);
  }

  // submit the form
  private upload(): void {
    return;
  }
}
</script>
