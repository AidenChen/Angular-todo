import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from '../domain/entities';

@Injectable()
export class UserService {

  private api_url = 'http://localhost:3000/users';

  constructor(private http: Http) { }

  getUser(userId: number): Observable<User> {
    const url = `${this.api_url}/${userId}`;
    return this.http.get(url)
      .map(res => res.json() as User);
  }

  findUser(username: string): Observable<User> {
    const url = `${this.api_url}/?username=${username}`;
    return this.http.get(url)
      .map(res => {
        const users = res.json() as User[];
        return (users.length > 0) ? users[0] : null;
      });
  }

}
