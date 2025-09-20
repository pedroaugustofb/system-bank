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
  private readonly api: string = `${environment.api}/clientes`

  constructor(private readonly http: HttpClient) {}

  getUser(userId: User['id']): Observable<User> {
    return this.http.get<User>(`${this.api}${userId}`)
  }

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api)
  }

  listUsersPaginated(pagination: Pagination): Observable<User[]> {
    const url = `${this.api}?page=${pagination.page}&pageSize=${pagination.pageSize}`
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
