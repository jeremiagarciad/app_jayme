import { Hono } from "hono";
import { logger } from "hono/logger";
import notFound from "./middlewares/not-found";

const app = new Hono();
app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/test", (c) => {
  return c.text("Hello Test!");
});

app.all("*", notFound);

export default app;
