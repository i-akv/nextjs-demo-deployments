import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .get("/:p", ({ params: { p } }) => ({ p }))
  .post("/post", ({ body }) => body);

const api = app.handle;
export default api;
