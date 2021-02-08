/*
 * @Description: babel 配置
 * @Author: dongzhiwen
 * @since: 2021-02-08 10:36:36
 * @LastAuthor: dongzhiwen
 * @lastTime: 2021-02-08 16:27:29
 */
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript'
  ],
};