// User class model 
// add create method to create a new user in the database/auth service
// add get method to get a user from the database/auth service
// add update method to update a user in the database/auth service

import { register } from '../services/Auth';

class User {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  async create() {
    await register(this.email, this.password);
  }

  get() {
    // get user from database/auth service
  }

  update() {
    // update user in database/auth service
  }
}