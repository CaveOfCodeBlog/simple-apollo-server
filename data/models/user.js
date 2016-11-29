import { User as db } from '../connectors';

const findById = (id) => {
  return db.findById(id);
};

const create = (user) => {
  return db.create(user);
};

export const User = {
  findById,
  create,
};
