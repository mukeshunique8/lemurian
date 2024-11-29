import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  // API URL for your backend
  private apiUrl = 'http://localhost:5000/api/services';

  constructor(private http: HttpClient) {}


  // Get all services from the backend
  getServices(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new service to the backend
  addService(service: any): Observable<any> {
    return this.http.post(this.apiUrl, service);
  }
}
