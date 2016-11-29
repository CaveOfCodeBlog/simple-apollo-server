import { Car } from '../models';

export const User = {
  cars(model) {
    return Car.findByOwner(model.id);
  },
};
