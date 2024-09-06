# rank

## 配置

打开 `src/config.ts` ，其初始值为：
```ts
export default {
    api_url: 'http://localhost:1145/',
    pollInterval: 1000,
    eachPage:10,
    nextPageInterval: 10000,
};
```

其中 `api_url` 为 http api 的 url； `pollInterval` 为轮询间隔时间，单位毫秒； `eachPage` 为每页显示的人数； `nextPageInterval` 为自动翻页的间隔时间，单位毫秒，翻到最后一页后再翻译会回到第一页。

## 部署

安装依赖：
```shell
npm install
```

以开发模式运行：
```shell
npm run dev
```

构建：
```shell
npm run build
```

运行：
```shell
npm run build
```

在 `http://localhost:1145/` 启动本地 http Api 服务器：
```shell
npm run test-server
```
