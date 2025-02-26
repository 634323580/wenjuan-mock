const Koa = require("koa"); // 引入Koa框架
const Router = require("koa-router"); // 引入Koa Router模块
const mockList = require("./mock"); // 引入mock数据列表

const app = new Koa(); // 创建Koa实例
const router = new Router(); // 创建Router实例

async function getRes(fn, ctx) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn(ctx));
    }, 500);
  });
}

mockList.forEach((item) => {
  router[item.method](item.url, async (ctx) => {
    const res = await getRes(item.response, ctx);
    ctx.body = res;
  });
});

app.use(router.routes()); // 将路由注册到Koa应用中
app.listen(3001); // 监听3001端口
