<template>
  <v-card
    :style="cardStyle"
    :color="color"
    :dark="dark"
    :elevation="elevation"
    :tile="tile"
  >
    <v-icon id="decoration-icon" :color="iconColor" :style="iconStyle">
      {{ icon }}
    </v-icon>
    <slot />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CardWithIcon extends Vue {
  @Prop() private icon!: string;
  @Prop({ default: "left" }) private iconPos!: "left" | "right";
  @Prop({ default: "8em" }) private iconSize!: string;
  @Prop({ default: "black" }) private iconColor!: string;

  @Prop() private color!: string;
  @Prop() private dark!: boolean;
  @Prop() private elevation!: number;
  @Prop() private tile!: boolean;

  get cardStyle(): object {
    return {
      [`padding-${this.iconPos}`]: `calc(${this.iconSize} * 0.7)`,
      "min-height": this.iconSize
    };
  }

  get iconStyle(): object {
    return {
      position: "absolute",
      "font-size": this.iconSize,
      [this.iconPos]: "-0.25em",
      bottom: "5%"
    };
  }
}
</script>
