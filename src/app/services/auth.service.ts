import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USERS_KEY = 'drink_shop_users';
  private readonly SESSION_KEY = 'drink_shop_session';

  constructor() {
    // Initialize with a demo user if no users exist
    if (!localStorage.getItem(this.USERS_KEY)) {
      const demoUser: User = {
        id: 1,
        username: 'demo',
        email: 'demo@drinkshop.com',
        password: 'demo123'
      };
      localStorage.setItem(this.USERS_KEY, JSON.stringify([demoUser]));
    }
  }

  register(username: string, email: string, password: string): { success: boolean; message: string } {
    const users = this.getUsers();
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
      return { success: false, message: 'Email already registered' };
    }
    
    // Check if username already exists
    if (users.find(u => u.username === username)) {
      return { success: false, message: 'Username already taken' };
    }

    const newUser: User = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      username,
      email,
      password
    };

    users.push(newUser);
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    
    return { success: true, message: 'Registration successful' };
  }

  login(emailOrUsername: string, password: string): { success: boolean; message: string } {
    const users = this.getUsers();
    const user = users.find(u => 
      (u.email === emailOrUsername || u.username === emailOrUsername) && u.password === password
    );

    if (user) {
      // Store user session (without password)
      const session = { id: user.id, username: user.username, email: user.email };
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
      return { success: true, message: 'Login successful' };
    }

    return { success: false, message: 'Invalid credentials' };
  }

  logout(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.SESSION_KEY) !== null;
  }

  getCurrentUser(): Omit<User, 'password'> | null {
    const session = localStorage.getItem(this.SESSION_KEY);
    if (session) {
      return JSON.parse(session);
    }
    return null;
  }

  private getUsers(): User[] {
    const users = localStorage.getItem(this.USERS_KEY);
    return users ? JSON.parse(users) : [];
  }
}
