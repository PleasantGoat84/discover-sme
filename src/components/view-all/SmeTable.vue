<template>
  <div>
    <v-data-table
      :loading="!tableItems.length"
      :headers="tableHeaders"
      :items="mappedItems"
      :search="search"
      hide-default-footer
      :page.sync="page"
      @page-count="pageCount = $event"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="搜索"
          hide-details
          class="px-4"
        />
      </template>
    </v-data-table>

    <div class="text-center py-2" v-if="tableItems.length">
      <v-pagination v-model="page" :length="pageCount" color="info" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Sme, HotSme, SmeCategory } from "@/types";
import { fakeApiCategories, fakeApiHotSmes } from "@/fake-api";

interface TableHeader {
  text: string;
  value: string;
  align?: "start" | "center" | "end";
  sortable?: boolean;
  filterable?: boolean;
  groupable?: boolean;
  divider?: boolean;
  class?: string | string[];
  width?: string | number;
  // filter?: (value: any, search: string, item: any) => boolean;
  // sort?: (a: any, b: any) => number;
}

interface SmeWithCategoryString extends Sme {
  categoryString: string;
}

@Component
export default class SmeTable extends Vue {
  private readonly tableHeaders: Array<TableHeader> = [
    {
      text: "名稱",
      value: "name"
    },
    {
      text: "類型",
      value: "categoryString"
    },
    {
      text: "人氣",
      value: "popularity"
    },
    {
      text: "排名",
      value: "rank"
    }
  ];

  private categoryMap: { [key: string]: string } = {};

  private tableItems: Array<HotSme> = [];

  private search = "";
  private page = 1;
  private pageCount = 0;

  get mappedItems(): Array<HotSme & SmeWithCategoryString> {
    return this.tableItems.map(sme => {
      const mappedSme = sme as HotSme & SmeWithCategoryString;

      mappedSme.categoryString = this.categoryMap[
        SmeCategory[sme.category] as keyof typeof SmeCategory
      ];

      return mappedSme;
    });
  }

  created(): void {
    const categories = fakeApiCategories();

    for (const key in categories)
      this.categoryMap[SmeCategory[categories[key]]] = key;

    setTimeout(() => {
      this.tableItems = fakeApiHotSmes();
    }, 2000);
  }
}
</script>
