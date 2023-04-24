import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { ServiceDTO } from '../models/ServiceDTO.model';
import { CustomerVehicleServiceDTO } from '../models/vehicle-service-detail-dto.model';
import { GeneralResponse } from '../models/general-response.model';

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

  recieveVehicle(serviceItem: CustomerVehicleServiceDTO): Observable<GeneralResponse> {
    return this.http.post<GeneralResponse>(this.url + `/CustomerProfile/profileWithService`, serviceItem);
  }

  // recieveVehicle(service: ServiceDTO): Observable<general>
}
