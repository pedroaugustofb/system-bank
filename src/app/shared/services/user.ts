import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

interface Pagination {
  page: number
  pageSize: number
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api: string = `${environment.api}`

  private http: HttpClient = Inject(HttpClient)

  getUser(userId: User['id']): Observable<User> {
    return this.http.get<User>(`${this.api}${userId}`)
  }

  listUsers(pagination?: Pagination): Observable<User[]> {
    let url = this.api

    if(pagination){
      `${url}?page=${pagination.page}&pageSize=${pagination.pageSize}`
    }

    return this.http.get<User[]>(url)
  }

  createUser(data: User): Observable<User> {
    return this.http.post<User>(this.api, data)
  }

  updateUser(data: User): Observable<User> {
    return this.http.put<User>(this.api, data)
  }

  deleteUser(userId: User['id']): Observable<Object> {
    return this.http.delete(`${this.api}${userId}`)
  }
}
