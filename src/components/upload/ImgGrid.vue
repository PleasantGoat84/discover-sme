<template>
  <v-container fluid class="pa-0">
    <h2>中小企照片</h2>
    <h3 class="info--text">最多 9 張</h3>
    <v-row no-gutters class="mt-3">
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

    <!-- hidden image inputs will be generated here -->
    <div ref="imageInputs" class="d-none" />

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

            <v-divider :key="`divider-${i}`" v-if="i < sheetItems.length - 1" />
          </template>
        </v-list>
      </v-sheet>
    </v-bottom-sheet>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ImgGrid extends Vue {
  private readonly maxImg = 9;
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

  getImgs(): Array<string> {
    return this.imgs;
  }

  get isValid(): boolean {
    return this.imgs.length > 0;
  }

  getImgInputsDiv(): HTMLElement | null {
    return this.$refs.imageInputs as HTMLElement;
  }
  getLastImgInput(): HTMLInputElement | null {
    const div = this.getImgInputsDiv();
    if (!div) return null;
    return div.lastElementChild as HTMLInputElement;
  }

  // generate a empty input for uploading images
  private genNewInput(capture: boolean): HTMLInputElement {
    let input = this.getLastImgInput();

    if (input && input.files && input.files.length === 0) input.remove();

    const div = this.getImgInputsDiv();
    if (div === null) throw "imgInputsDiv is null";

    div.innerHTML += `<input type="file" accept="image/*" multiple />`;

    input = this.getLastImgInput();

    if (input === null) throw "lastImgInput should not be null";
    if (capture) input.setAttribute("capture", "");
    return input;
  }

  // read image using FileReader and push into imgs
  private readImage(file: File): void {
    const reader = new FileReader();

    reader.addEventListener("load", event => {
      if (this.imgs.length >= this.maxImg) return;

      const loadedReader = event.target as FileReader;

      if (typeof loadedReader.result !== "string")
        throw "Reader result should be a string";

      this.imgs.push(loadedReader.result);

      this.$emit("validate");
    });

    reader.readAsDataURL(file);
  }

  // handler when upload image btn pressed
  private addImage(capture: boolean): void {
    // create a input

    const input = this.genNewInput(capture);

    // read the image uploaded and show

    // add event listener first
    input.addEventListener("change", e => {
      const targetInput = e.target as HTMLInputElement;

      if (targetInput.files) {
        [...targetInput.files].forEach(this.readImage);
      }
    });

    input.click();

    this.sheet = false;
  }

  private deleteImg(idx: number): void {
    // debugger;
    this.imgs.splice(idx, 1);
  }
}
</script>
