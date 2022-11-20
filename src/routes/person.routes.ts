import { Router } from "express";

const personController = require("../controllers/personController");
const personRouter = Router();

personRouter.post("/", personController.createPerson);

personRouter.get("/", personController.getAllPersons);
personRouter.get("/:id", personController.getPersonById);

personRouter.put("/:id", personController.updatePersonById);

personRouter.delete("/:id", personController.deletePersonById);

export default personRouter;
