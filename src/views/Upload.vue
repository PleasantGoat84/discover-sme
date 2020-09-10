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
          <UploadForm ref="uploadForm" v-show="!uploadFinish" />
          <PostCard v-if="uploadFinish" :post="getGeneratedPost()" />
        </v-card-text>

        <v-card-actions class="justify-center pb-10 mt-3">
          <v-btn
            color="primary"
            large
            class="px-4"
            @click="upload"
            :disabled="!isValid || uploading"
          >
            發佈分享
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-overlay :value="overlay">
        <v-progress-circular indeterminate />
      </v-overlay>

      <v-snackbar v-model="snackbar" :color="apiError ? 'error' : ''">
        {{ apiError ? "分享發佈失敗" : "分享發佈成功" }}
        <template v-slot:action="{ attrs }">
          <v-btn
            :color="apiError ? 'white' : 'primary'"
            icon
            v-bind="attrs"
            @click="snackbar = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import UploadForm from "@/components/upload/UploadForm.vue";
import ImgGrid from "@/components/upload/ImgGrid.vue";
import PostCard from "@/components/PostCard.vue";

import { Post } from "@/types";
import { fakeApiGenPost } from "@/fake-api";

@Component({ components: { UploadForm, PostCard } })
export default class Upload extends Vue {
  private overlay = false;
  private snackbar = false;

  private apiError = false;
  private uploadFinish = false;

  private uploading = false;

  isValid = false;

  getUploadForm(): UploadForm {
    return this.$refs.uploadForm as UploadForm;
  }

  getImgGrid(): ImgGrid {
    return this.getUploadForm().$refs.imgGrid as ImgGrid;
  }

  get shareAvailable(): boolean {
    return navigator.share !== undefined;
  }

  getGeneratedPost(): Post {
    return fakeApiGenPost(this.getUploadForm());
  }

  // submit the form
  private async upload(): Promise<void> {
    this.uploading = true;

    const uploadForm = this.getUploadForm();

    uploadForm.$refs.uploadForm.validate();

    await this.$nextTick();

    if (!uploadForm.getFormValid()) return;

    const formData = new FormData();

    formData.append("title", uploadForm.getTitle());
    formData.append("content", uploadForm.getContent());

    const sme = uploadForm.getSme();

    formData.append("sme-name", sme.name);
    formData.append("sme-pos", sme.pos.value);
    formData.append("sme-cat", uploadForm.getCategory().toString());

    if (sme.pos.gPos !== undefined)
      formData.append(
        "sme-g-pos",
        sme.pos.gPos.coords.latitude + "," + sme.pos.gPos.coords.longitude
      );

    /* - - - - - - - - - - - - - - - - - - - - - - - - - */

    // since img data is too long and useless in email, images will be added later
    fetch("https://formspree.io/xjvankew", {
      method: "POST",
      body: formData,
      mode: "no-cors"
    }).then(res => {
      console.log(res);
      alert(
        "form to email request has been sent! check console for more info!"
      );
    });

    /* - - - - - - - - - - - - - - - - - - - - - - - - - */

    const imgGrid = this.getImgGrid();
    imgGrid.getImgs().forEach((img, i) => {
      formData.append(`sme-img[${i}]`, img);
    });

    /* - - - - - - - - - - - - - - - - - - - - - - - - - */

    // fetch("https://do.something.with.the.api", {
    //   method: "POST",
    //   body: formData
    // }).then(res => console.log(res));

    this.overlay = true;

    setTimeout(this.handleRes, 3000);

    /* - - - - - - - - - - - - - - - - - - - - - - - - - */

    const dataObj: {
      [key: string]: FormDataEntryValue;
    } = {};

    for (const data of formData.entries()) {
      dataObj[data[0]] = data[1];
    }

    console.log(dataObj);
  }

  private handleRes(): void {
    // this.apiError = true;

    this.overlay = false;
    this.snackbar = true;

    if (this.apiError) {
      this.uploading = false;
    } else {
      this.uploadFinish = true;
    }
  }
}
</script>
