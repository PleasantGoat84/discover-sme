module.exports = {
  transpileDependencies: ["vuetify"],

  pwa: {
    name: "發現中小企",
    themeColor: "#DF456B",
    msTileColor: "#a0cef5",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",

    manifestOptions: {
      display: "fullscreen",
      orientation: "portrait"
    }
  }
};
