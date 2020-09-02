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
          <v-textarea filled name="content" label="分享內容" />

          <v-container fluid class="pa-0">
            <v-row no-gutters>
              <v-col v-for="(img, i) in imgs" :key="i" cols="4" class="pa-1">
                <v-card>
                  <v-btn
                    fab
                    dark
                    x-small
                    absolute
                    right
                    top
                    color="error"
                    class="mt-3 mr-n5"
                    @click="deleteImg(i)"
                  >
                    <v-icon dark>mdi-delete-outline</v-icon>
                  </v-btn>

                  <v-img :src="img" aspect-ratio="1" />
                </v-card>
              </v-col>

              <v-col
                cols="4"
                v-if="imgs.length < maxImg"
                class="d-flex align-center justify-center"
                style="min-height: 30vw;"
              >
                <v-btn
                  tile
                  outlined
                  color="accent"
                  class="upload-btn rounded-0"
                  height="80px"
                  width="80px"
                  @click="sheet = true"
                >
                  <v-icon x-large>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions class="justify-center pb-10">
          <v-btn color="primary" large class="px-4 mt-3">發佈分享</v-btn>
        </v-card-actions>

        <!-- hidden image inputs will be generated here -->
        <div id="image-inputs" class="d-none" />
      </v-card>

      <v-bottom-sheet v-model="sheet">
        <v-sheet>
          <v-list>
            <template v-for="(item, i) in sheetItems">
              <v-list-item :key="i" @click="item.handler">
                <v-list-item-avatar>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>

              <v-divider :key="`divider-${i}`" />
            </template>
          </v-list>
        </v-sheet>
      </v-bottom-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Upload extends Vue {
  private maxImg = 9;
  private imgs: Array<string> = [];

  private sheet = false;
  private sheetItems: Array<{
    icon: string;
    text: string;
    handler: () => void;
  }> = [
    {
      icon: "mdi-camera",
      text: "即時拍攝",
      handler: () => {
        this.addImage(true);
      }
    },
    {
      icon: "mdi-image",
      text: "選取相片",
      handler: () => {
        this.addImage(false);
      }
    }
  ];

  getImgInputsDiv(): HTMLElement | null {
    return document.getElementById("image-inputs");
  }
  getLastImgInput(): HTMLInputElement | null {
    const div = this.getImgInputsDiv();
    if (!div) return null;
    return div.lastElementChild as HTMLInputElement;
  }

  private addImage(capture: boolean): void {
    /* create a input */

    let input = this.getLastImgInput();

    if (input && input.files && input.files.length === 0) input.remove();

    const div = this.getImgInputsDiv();
    if (div === null) throw "imgInputsDiv is null";

    div.innerHTML += `<input type="file" accept="image/*" multiple />`;

    input = this.getLastImgInput();

    if (input === null) throw "lastImgInput should not be null";
    if (capture) input.setAttribute("capture", "");

    /* read the image uploaded and show*/

    input.addEventListener("change", e => {
      const targetInput = e.target as HTMLInputElement;

      if (targetInput.files) {
        [...targetInput.files].forEach(file => {
          if (this.imgs.length >= this.maxImg) return;

          const reader = new FileReader();

          reader.addEventListener("load", event => {
            if (this.imgs.length >= this.maxImg) return;

            const loadedReader = event.target as FileReader;

            if (typeof loadedReader.result !== "string")
              throw "Reader result should be a string";

            this.imgs.push(loadedReader.result);
          });

          reader.readAsDataURL(file);
        });
      }
    });

    input.click();

    this.sheet = false;

    return;
  }

  private deleteImg(idx: number): void {
    // debugger;
    this.imgs.splice(idx, 1);
  }
}
</script>
