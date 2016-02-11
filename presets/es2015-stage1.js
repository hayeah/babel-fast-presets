const stage1 = require("babel-preset-stage-1");
const es2015 = require("babel-preset-es2015");

module.exports = {
  presets: stage1.presets,
  plugins: es2015.plugins.concat(stage1.plugins),
}
