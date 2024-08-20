module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    /* 临时关闭eslint规则：第三方插件规则 */
    'vue/no-dupe-keys': 'off',
    'vue/require-prop-type-constructor': 'off',
    'vue/valid-next-tick': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/no-mutating-props': 'off',
    'unicorn/prefer-dom-node-append': 'off',
    'unicorn/prefer-includes': 'off',
    /* 临时关闭eslint规则：js规则 */
    'no-unused-vars': 'off',
    'no-dupe-keys': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-irregular-whitespace': 'off',
    'no-async-promise-executor': 'off',
    'no-empty': 'off',
    'no-cond-assign': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-constant-condition': 'off',
    'no-redeclare': 'off',
    'no-extra-semi': 'off',
    'no-prototype-builtins': 'off',
    'no-useless-escape': 'off',
  }
}
