import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _baseUrl :string = environment.apiServerUrl;
  constructor(private _http : HttpClient) { }

  getEmployees(): Observable<any>
  {
    const _url = `${this._baseUrl}/employee`;
    console.log(_url);
    return this._http.get<any>(_url);

   }

   save(employee) : Observable<any>
   {
      const _url = `${this._baseUrl}/employee`
      return this._http.post(_url, employee)
   }
}
