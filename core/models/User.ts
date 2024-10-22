// User class model 
// add create method to create a new user in the database/auth service
// add get method to get a user from the database/auth service
// add update method to update a user in the database/auth service
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

import { register } from '../services/Auth';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';


export class User {
  email: string;
  password: string;
  name: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.name = '';
  }

  async create() {
    const res: FirebaseAuthTypes.UserCredential = await register(this.email, this.password);

    if (!res.user) {
      throw new Error('User not created');
    }
    
    // create user document in firestore
    return await firestore()
      .collection('users')
      .doc(res.user.uid)
      .set({
        email: this.email,
        name: this.name,
        createdAt: firestore.FieldValue.serverTimestamp(),
        updatedAt: firestore.FieldValue.serverTimestamp(),
      });
  }

  get() {
    // get user from database/auth service
  }

  update() {
    // update user in database/auth service
  }
}