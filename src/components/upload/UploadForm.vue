<template>
  <v-form ref="uploadForm" v-model="isFormValid">
    <v-text-field
      label="分享標題"
      :rules="[v => (v || '').length > 0 || '請輸入標題']"
      v-model="title"
    />

    <v-textarea
      filled
      name="content"
      label="分享內容"
      class="mt-3"
      v-model="content"
    />

    <v-text-field
      label="中小企名稱"
      prepend-inner-icon="mdi-domain"
      :rules="[v => (v || '').length > 0 || '請輸入中小企名稱']"
      v-model="sme.name"
    />
    <v-text-field
      label="中小企位置"
      prepend-inner-icon="mdi-map-marker"
      :messages="gPosAvailable ? '按此自動取得當前定位' : ''"
      :rules="[gPosValidator]"
      v-model="sme.pos.value"
      ref="posField"
    >
      <template v-slot:message="{ message }">
        <v-btn
          text
          small
          @click="getPos"
          color="blue"
          v-if="!sme.pos.gPos"
          class="pa-0"
        >
          {{ message }}
        </v-btn>
        <template v-else>
          已取得當前定位, 你亦可以填寫更準確的地址
        </template>
      </template>
    </v-text-field>

    <v-select
      v-model="category"
      :items="Object.keys(categories)"
      menu-props="auto"
      label="中小企類型"
      prepend-inner-icon="mdi-help-circle-outline"
      :rules="[v => (v || '').length > 0 || '請選擇中小企類型']"
    />

    <v-divider class="my-8" />

    <ImgGrid ref="imgGrid" @validate="checkValid()" />
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImgGrid from "@/components/upload/ImgGrid.vue";
import Upload from "@/views/Upload.vue";
import { SmeCategory } from "@/types";

interface Sme {
  name: string;
  pos: {
    value: string;
    gPos?: Position;
  };
}

function validator(this: UploadForm): void {
  this.$parent.$parent.isValid = this.getFormValid() && this.getImgValid();
}

@Component({
  components: { ImgGrid },
  watch: {
    isFormValid: validator,
    isImgValid: validator
  }
})
export default class UploadForm extends Vue {
  $parent!: Vue & { $parent: Upload };

  $refs!: {
    imgGrid: ImgGrid;
    uploadForm: UploadForm & { validate: () => void };
    posField: Vue;
  };

  private title = "";

  private sme: Sme = { name: "", pos: { value: "" } };

  private content = "";

  private category = "";

  private isValid = false;
  private isFormValid = false;
  private isImgValid = false;

  private readonly categories: {
    [key: string]: SmeCategory;
  } = {
    餐廳: SmeCategory.Cafe,
    飲品: SmeCategory.Drink,
    髮廊: SmeCategory.Barber,
    機電: SmeCategory.Mechanical,
    時裝: SmeCategory.Fashion,
    音樂: SmeCategory.Musical,
    醫療: SmeCategory.Medical,
    教育: SmeCategory.Education,
    其他: SmeCategory.Other
  };

  getCategory(): SmeCategory {
    return this.categories[this.category];
  }

  getFormValid(): boolean {
    return this.isFormValid;
  }

  getImgValid(): boolean {
    return this.isImgValid;
  }

  getTitle(): string {
    return this.title;
  }

  getSme(): Sme {
    return this.sme;
  }

  getContent(): string {
    return this.content;
  }

  get gPosAvailable(): boolean {
    return navigator.geolocation !== undefined;
  }

  private checkValid(): void {
    this.isImgValid = this.$refs.imgGrid.isValid;
  }

  getImgGrid(): ImgGrid {
    return this.$refs.imgGrid;
  }

  // get the current position
  private getPos(): void {
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.$set(this.sme.pos, "gPos", pos);

        console.log(pos);

        // // vuetify and typescript
        // this.$refs.uploadForm.validate();
        // manually set valid to true
        (this.$refs.posField as Vue & { validate: () => void }).validate();
      },
      err => {
        alert("獲取當前位置失敗, 請確定位置存取已開啟");
        console.log(err);
      }
    );
  }

  private gPosValidator(value: string | undefined): boolean | string {
    return !((value || "").length === 0 && this.sme.pos.gPos === undefined);
  }
}
</script>
