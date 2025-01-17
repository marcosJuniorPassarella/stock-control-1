import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

import { enviroment } from '../../../enviroments/enviroment';
import { getCategoriesResponse } from '../../models/interface/categories/responses/getCategoriesResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private API_URL = enviroment.API_URL
  private JWT_TOKEN = this.cookie.get('USER_INFO')
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application;json',
      Authorization: `Bearer ${this.JWT_TOKEN}`
    })
  }

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  getAllCategories(): Observable<Array<getCategoriesResponse>> {
    return this.http.get<Array<getCategoriesResponse>>(
      `${this.API_URL}/categories`,
      this.httpOptions
    )
  }
}
