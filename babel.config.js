module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { browserslistEnv: process.env.BROWSERSLIST_ENV, debug: true },
    ],
  ],
};
