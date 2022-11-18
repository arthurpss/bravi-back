import { Request, Response } from "express";
const personService = require("../services/personService");

exports.createPerson = async (request: Request, response: Response) => {
  try {
    return response.json(await personService.createPerson(request.body));
  } catch (error) {
    console.log("Error at [createPerson]: ", error);
    return response.status(500).json({ error: error });
  }
};

exports.getAllPersons = async (request: Request, response: Response) => {
  try {
    return response.json(await personService.getAllPersons());
  } catch (error) {
    console.log("Error at [getAllPersons]: ", error);
    return response.status(500).json({ error: error });
  }
};

exports.updatePersonById = async (request: Request, response: Response) => {
  const personId = request.params;
  const person = request.body;

  try {
    return response.json(
      await personService.updatePersonById(personId, person)
    );
  } catch (error) {
    console.log("Error at [updatePersonById]: ", error);
    return response.status(500).json({ error: error });
  }
};

exports.deletePersonById = async (request: Request, response: Response) => {
  try {
    return response.json(await personService.deletePersonById(request.params));
  } catch (error) {
    console.log("Error at [deletePersonById]: ", error);
    return response.status(500).json({ error: error });
  }
};
