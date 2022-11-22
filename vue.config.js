const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pwa: {
    name: "인호vue",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    workboxOptions: { exclude: [/\.map$/, /manifest\.json$/, "index.html"] },
  },
  publicPath: "/vue-pwa-test",
  transpileDependencies: true,
  lintOnSave: false,
});
