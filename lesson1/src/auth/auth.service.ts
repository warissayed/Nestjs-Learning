import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  registerUser() {
    /*
     * TODO: Implement user registration logic here
     * 1. Validate user input
     * 2. Check if user already exists (email, username) - throw error if exists
     * 3. Hash password
     * 4. Save user to database
     * 5. Return success message
     */
    //1 Validate user input

    return { message: 'this is the message from service' };
  }
}
