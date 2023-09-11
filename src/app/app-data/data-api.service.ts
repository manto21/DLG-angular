import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataApiService {

  constructor(private http: HttpClient) {}

  userSignUp (userData: any) : Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    let mockAPI: string = 'https://run.mocky.io/v3/4845f356-ca38-4623-8d02-2baaff7ef08f';
    return this.http.post(mockAPI, userData, { headers, responseType: 'text' });
  }

}
