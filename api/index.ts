import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .get("/:p", ({ params: { p } }) => ({ p }))
  .get("/env", () => JSON.parse(JSON.stringify(process.env)))
  .get("/env/:key", ({ params: { key } }) => ({ key: process.env[key] ?? "" }))
  .post("/post", ({ body }) => body);

const api = app.handle;
export default api;
