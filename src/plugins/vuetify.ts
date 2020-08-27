import Vue from "vue";
import Vuetify from "vuetify/lib";
import zhHant from "vuetify/src/locale/zh-Hant";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#E89450",
        secondary: "#CBF3F7",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#20B5DD",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: { zhHant },
    current: "zh-Hant"
  }
});
