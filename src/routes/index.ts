import { Router } from "express";
import contactRouter from "./contact.routes";
import personRouter from "./person.routes";

const routes = Router();

routes.use("/contact", contactRouter);
routes.use("/person", personRouter);

export default routes;
