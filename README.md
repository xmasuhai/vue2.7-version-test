# version-test vue2.7依赖版本测试项目

- `yarn@1.22.19 ~ 1.22.22`
- `node@18.20.4`
- 最低兼容 `chrome 49`，查看配配置：`.browserslistrc`
- 最高支持 `ES2020` 语法

> 参考链接：

- [迁移至 Vue 2.7](https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html)

## 逐步修改代码

- `eslint` 规则下的 'off' 逐步修改代码
- `scss` 警告提示逐步修复；
- `vue`模板中样式标签中的深入样式选择器只使用 `::v-deep`，全局替换旧的 `/deep/`，禁止使用 `/deep/` 已在新版`sass`中废弃

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
