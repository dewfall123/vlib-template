/* eslint-disable @typescript-eslint/no-var-requires */
const Koa = require('koa');
const StaticServer = require('koa-static-server');
const app = new Koa();

app.use(
  StaticServer({
    rootDir: 'docs/dist/',
    rootPath: '/projectName',
  }),
);

app.use(async (ctx) => {
  ctx.redirect('/projectName');
});

const port = 3001;
app.listen(port);
console.log(`Starting up static-serve
Available on:
  http://127.0.0.1:${port}
`);
