const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/vue-pwa-test",
  outputDir: "docs",
  pwa: {
    name: "vue",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    workboxOptions: { exclude: [/\.map$/, /manifest\.json$/, "index.html"] },
  },
  transpileDependencies: true,
  lintOnSave: false,
});
