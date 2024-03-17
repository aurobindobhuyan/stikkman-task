import { default as courseRoute } from "./courseRoutes";

const prefix = "/course";

export default (app) => {
  app.use(prefix, courseRoute);
};
