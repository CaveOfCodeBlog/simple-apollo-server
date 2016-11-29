import { User, Car } from '../models';

export const Mutation = {
    createUser: (_, { user }) => {
        return User.create(user);
    },
    createCar: (_, { car }) => {
        return Car.create(car);
    },
};
