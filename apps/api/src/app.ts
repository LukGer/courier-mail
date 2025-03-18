import configureOpenAPI from "@/lib/configure-open-api";
import createApp from "@/lib/create-app";
import emails from "@/routes/emails/emails.index";

const app = createApp();

configureOpenAPI(app);

const routes = [emails] as const;
type Routes = typeof routes;
export type AppType = Routes[number];

routes.forEach((route) => {
  app.route("/", route);
});

export default app;
