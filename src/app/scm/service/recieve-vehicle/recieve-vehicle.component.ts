import { Component } from '@angular/core';
import { ServiceDTO } from '../../models/ServiceDTO.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-recieve-vehicle',
  templateUrl: './recieve-vehicle.component.html',
  styleUrls: ['./recieve-vehicle.component.scss']
})
export class RecieveVehicleComponent {
  mobileNumber = '';
  isLoading: any = {};
  serviceDTO!: ServiceDTO;

  constructor(
    private customerService: CustomerService
  ) {}

  onKeyDown(event: any) {
    // Allow only numeric input
    const isNumericInput = /^\d*$/.test(event.key);
    if (!isNumericInput && event.key !== "Backspace") {
      event.preventDefault();
    } 
  }
  
  onPaste(event: any) {
    // Get the pasted content and remove non-numeric characters
    const clipboardData = event.clipboardData;
    const pastedData = clipboardData.getData('text');
    const strippedData = pastedData.replace(/[^0-9]/g, '');
  
    // Set the input value to the stripped content
    const input = event.target as HTMLInputElement;
    input.value = strippedData;
    event.preventDefault();
  }

  getCustomerDataByMobNo() {
    if (this.mobileNumber.length > 9) {
      this.isLoading.customerDataByMobNo = true;
      this.customerService.getCustomerByMobileNo(parseInt(this.mobileNumber)).subscribe(res => {
        if (res != null) {
          this.serviceDTO = res;
        }
        this.isLoading.customerDataByMobNo = false;
      }, error => {
        this.isLoading.customerDataByMobNo = false;
      })
    }
  }
 
  recieveVehicle() {
    console.log("gghf");
  }
}
