import { Request, Response } from "express";
const contactService = require("../services/contactService");

exports.createContacts = async (request: Request, response: Response) => {
  try {
    return response.json(await contactService.createContacts(request.body));
  } catch (error) {
    console.log("Error at [createContacts]: ", error);
    return response.status(500).json({ error: error });
  }
};

exports.updateContactById = async (request: Request, response: Response) => {
  const contactId = request.params;
  const contact = request.body;

  try {
    return await response.json(
      contactService.updateContactById(contactId, contact)
    );
  } catch (error) {
    console.log("Error at [updateContactById]: ", error);
    return response.status(500).json({ error: error });
  }
};

exports.updateContacts = async (request: Request, response: Response) => {
  const contacts = request.body;

  try {
    return response.json(await contactService.updateContacts(contacts));
  } catch (error) {
    console.log("Error at [updateContacts]: ", error);
    return response.status(500).json({ error: error });
  }
};

exports.deleteContactById = async (request: Request, response: Response) => {
  try {
    return response.json(
      await contactService.deleteContactById(request.params)
    );
  } catch (error) {
    console.log("Error at [deleteContactById]: ", error);
    return response.status(500).json({ error: error });
  }
};

exports.deleteContacts = async (request: Request, response: Response) => {
  try {
    return response.json(await contactService.deleteContactsById(request.body));
  } catch (error) {
    console.log("Error at [deleteContacts]: ", error);
    return response.status(500).json({ error: error });
  }
};
