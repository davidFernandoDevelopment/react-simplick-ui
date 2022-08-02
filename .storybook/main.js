const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "webpackFinal": async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@hooks': path.resolve(__dirname, "../src/hooks"),
      '@utilities': path.resolve(__dirname, "../src/utilities"),
      '@generic': path.resolve(__dirname, "../src/generic"),
      '@stories': path.resolve(__dirname, "../src/stories")
    };

    return config;
  }
}