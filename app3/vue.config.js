// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
// module.exports = {
//   // devServer: {
//   //   open: true, // 自动打开浏览器
//   //   hot: true, // 实时打包编译
//   //   host: "localhost",
//   //   inline: true, // 表示实时刷新浏览器
//   //   port: "8009", // 指定打开浏览器的端口号
//   // },

// };
// Temporary until we can use https://github.com/webpack/webpack-dev-server/pull/2143
module.exports = {
  chainWebpack: (config) => {
    config.devServer.set("inline", false);
    config.devServer.set("hot", true);
    // Vue CLI 4 output filename is js/[chunkName].js, different from Vue CLI 3
    // More Detail: https://github.com/vuejs/vue-cli/blob/master/packages/%40vue/cli-service/lib/config/app.js#L29
    if (process.env.NODE_ENV !== "production") {
      config.output.filename(`js/[name].js`);
    }
    config.externals(["vue", "vue-router"]);
  },
  filenameHashing: false,
};
