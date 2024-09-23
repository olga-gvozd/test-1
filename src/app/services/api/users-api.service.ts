import {inject, Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserData} from "../../types/users.types";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private readonly usersUrl = 'https://gorest.co.in/public/v2/users';
  private readonly http = inject(HttpClient);

  constructor() { }

  getUsers(): Observable<IUserData[]> {
    return this.http.get<IUserData[]>(this.usersUrl);
  }
}
