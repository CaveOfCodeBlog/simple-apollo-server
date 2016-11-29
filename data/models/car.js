import { Car as db } from "../connectors";

const findById = (id) => {
  return db.findById(id);
}

const findByOwner = (owner) => {
  return db.find({ owner });
}

const create = (user) => {
  return db.create(user);
}

export const Car = {
  findById,
  findByOwner,
  create
}
