import contactRoutes from "./contact.route.js";

const router = (app) => {
  app.use("/api/contact", contactRoutes);
};

export default router;
