import { AppDataSource } from "../database/data-source";
import { Person } from "../database/entity/Person";

const personRepository = AppDataSource.getRepository(Person);

exports.createPerson = async (person: Person) => {
  return await personRepository.insert(person);
};

exports.getAllPersons = async () => {
  return await personRepository.find();
};

exports.getPersonById = async (personId: number) => {
  return await personRepository.findOneBy({
    id: personId,
  });
};

exports.updatePersonById = async (personId: number, person: Person) => {
  return await personRepository.update(personId, person);
};

exports.deletePersonById = async (personId: number) => {
  return await personRepository.delete(personId);
};
