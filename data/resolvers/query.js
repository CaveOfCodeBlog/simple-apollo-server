import { User } from '../models';

export const Query = {
  testString: () => {
      return 'new string!!!';
  },
  getUser: (_, { id }) => {
      return User.findById(id);
  },
};
