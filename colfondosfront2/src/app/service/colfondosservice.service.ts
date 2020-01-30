import { Injectable } from '@angular/core';
import { User } from '../colfondos/user';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "PUT,GET,POST,DELETE",
  "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"})
}

@Injectable({
  providedIn: 'root'
})
export class ColfondosserviceService {

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): void {
    const url = 'http://localhost:8081/v1/createUser';
    this.httpClient.post( url, JSON.stringify(user), httpOptions).subscribe((data) => {
      alert("Usuario creado: "+data)
    });
  }
}
