import { AppDataSource } from "../database/data-source";
import { validate } from "class-validator";
import { Contact } from "../database/entity/Contact";
import { In } from "typeorm";

const contactRepository = AppDataSource.getRepository(Contact);

exports.createContacts = async (contacts: Contact[]) => {
  const errors = await validate(contacts);
  if (errors.length) {
    throw new Error(`Validation failed!`);
  }
  return await contactRepository.insert(contacts);
};

exports.updateContactById = async (contactId: number, contact: Contact) => {
  const errors = await validate(contact);
  if (errors.length) {
    throw new Error(`Validation failed!`);
  }
  return await contactRepository.update(contactId, contact);
};

exports.updateContacts = async (contacts: Contact[]) => {
  const errors = await validate(contacts);
  if (errors.length) {
    throw new Error(`Validation failed!`);
  }
  return await contactRepository.save(contacts);
};

exports.deleteContactById = async (contactId: number) => {
  return await contactRepository.delete(contactId);
};

exports.deleteContactsById = async (contactIds: number[]) => {
  return await contactRepository.delete({ id: In(contactIds) });
};
