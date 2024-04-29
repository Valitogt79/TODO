import { User } from '../models/users';

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = ( localhostUser ) => {

  //Desestructurando los datos del objeto 
  const {
    avatar, 
    balance,
    first_name, 
    gender,
    id,
    isActive,
    last_name, 
  } = localhostUser;


  return new User({
    avatar,
    balance,
    firstName: first_name,
    gender,
    id,
    isActive,
    lastName: last_name,
  });
};


//Este mapper sera utilizado en el archivo /use-cases/load-users-by-page.js 