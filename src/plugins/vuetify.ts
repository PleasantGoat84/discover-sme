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
        primary: "#DF456B",
        secondary: "#997FBC",
        accent: "#46C5EC",
        error: "#FF5252",
        info: "#349E97",
        success: "#4CAF50",
        warning: "#FFC107",
        lite: "#F5F9F8"
      }
    }
  },
  lang: {
    locales: { zhHant },
    current: "zh-Hant"
  }
});
