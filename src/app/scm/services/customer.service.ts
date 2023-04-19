import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { ServiceDTO } from '../models/ServiceDTO.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = environment.service_center_api;
  constructor(
    private http: HttpClient
  ) { }

  getCustomerByMobileNo(mobNo: number): Observable<any> {
    return this.http.get<any>(this.url + `/CustomerProfile/getByMobileNo/${mobNo}`);
  }

  // recieveVehicle(service: ServiceDTO): Observable<general>
}
