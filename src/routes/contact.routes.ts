import { Router } from "express";

const contactController = require("../controllers/contactController");
const contactRouter = Router();

contactRouter.post("/", contactController.createContacts);

contactRouter.put("/:id", contactController.updateContactById);

contactRouter.delete("/:id", contactController.deleteContactById);

export default contactRouter;
