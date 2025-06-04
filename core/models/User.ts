/**
 * Simple user model used by the application.
 * It exposes helper methods that talk to the authentication service.
 */

import { register } from '../services/Auth';

class User {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  /**
   * Registers the user with the underlying authentication service.
   */
  async create() {
    await register(this.email, this.password);
  }

  /**
   * Retrieves the user information from the authentication service.
   * Currently not implemented.
   */
  get() {
    // get user from database/auth service
  }

  /**
   * Updates the user information in the authentication service.
   * Currently not implemented.
   */
  update() {
    // update user in database/auth service
  }
}
