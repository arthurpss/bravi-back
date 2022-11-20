import { Router } from "express";

const contactController = require("../controllers/contactController");
const contactRouter = Router();

contactRouter.post("/", contactController.createContacts);

contactRouter.put("/", contactController.updateContacts);
contactRouter.put("/:id", contactController.updateContactById);

contactRouter.delete("/", contactController.deleteContacts);
contactRouter.delete("/:id", contactController.deleteContactById);

export default contactRouter;
