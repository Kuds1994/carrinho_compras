import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): boolean {

    localStorage.setItem('user', username);

    return true;

  }


  getUser(){

    return localStorage.getItem('user');

  }

  isLogged(): boolean {

    const user = localStorage.getItem('user')
    return user != undefined ? true : false

    

  }
}
