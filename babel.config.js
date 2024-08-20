module.exports = {
  compact: false,
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: 'usage',
        corejs: {
          'version': 3, // 使用core-js@3
        }
      }
    ]
  ],

}
