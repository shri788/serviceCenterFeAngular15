import { AfterViewChecked, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServiceDTO } from '../../models/ServiceDTO.model';
import { CustomerService } from '../../services/customer.service';
import Swal from 'sweetalert2';
import { CustomerVehicleServiceDTO } from '../../models/vehicle-service-detail-dto.model';
import { VehicleDetailsModel } from '../../models/vehicle-details.model';
import { VehicleServiceRecieveDelivery } from '../../models/vehicle-service-delivery.model';
import { VehicleServiceDetails } from '../../models/vehicle-service-details.model';
import { TaskMasterModel } from '../../models/task-master';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recieve-vehicle',
  templateUrl: './recieve-vehicle.component.html',
  styleUrls: ['./recieve-vehicle.component.scss']
})
export class RecieveVehicleComponent implements AfterViewChecked, OnInit {
  mobileNumber = '';
  isLoading: any = {};
  serviceDTO!: ServiceDTO;
  sendValueCustomer = false;
  sendValueVehicle = false;
  customerProfileData!: CustomerVehicleServiceDTO;
  vehicleData!: VehicleDetailsModel;
  taskMasterList!: TaskMasterModel[];
  selectedTasks: TaskMasterModel[] = [];
  isAddOtherTask = false;
  taskDescritionOther = new FormControl();
  taskChargesOther = new FormControl();
  isVehicleSelected = false;

  constructor(
    private customerService: CustomerService,
    private cd: ChangeDetectorRef
  ) {}

    ngOnInit(): void {
      // this.selectedTasks.patchValue([{taskName: ''}]);
      this.getTaskMaster();
    }

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  onRemoveTask(task: TaskMasterModel) {
    const obj = this.selectedTasks.filter((x: any) => x.taskName === task.taskName)[0];
    const index = this.selectedTasks.indexOf(obj);
    this.selectedTasks.splice(index, 1);
  }

  onAddOtherTask() {
    const obj: TaskMasterModel = {
      taskName: 'OHTER',
      taskDescription: this.taskDescritionOther.value,
      taskCharges: this.taskChargesOther.value
    }
    this.selectedTasks.push(obj);
    this.taskChargesOther.reset();
    this.taskDescritionOther.reset();
  }

  vehicleSelectedEvent(vehicle: VehicleDetailsModel) {
    if (vehicle.vehicleNumber !== '') {
      this.isVehicleSelected = true;
    }
  }

  onKeyDown(event: any) {
    // Allow only numeric input
    const isNumericInput = /^\d*$/.test(event.key);
    if (!isNumericInput && event.key !== "Backspace") {
      event.preventDefault();
    } 
  }

  onAddServiceTask(tasks: TaskMasterModel[]) {
    this.isAddOtherTask = tasks.some(x => x.taskName === 'OTHER');
    console.log(tasks);
    const diff = this.selectedTasks.filter((x: TaskMasterModel) => tasks.find(y => y.taskName !== x.taskName))[0];
    console.log(diff);
    // when element removed
    if (this.selectedTasks.length > tasks.length) {
      const obj = this.selectedTasks.filter((x: TaskMasterModel) => x.taskName === diff.taskName)[0];
      const index = this.selectedTasks.indexOf(obj);
      this.selectedTasks.splice(index, 1);
    } else {
      // when element added
      const added  = tasks.filter(({ taskName: name1 }) => !this.selectedTasks.some(({ taskName: name2 }) => name2 === name1))[0];
      console.log(added);
      this.selectedTasks.push(added);
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

  getTaskMaster() {
    this.isLoading.customerDataByMobNo = true;
    this.customerService.getTaskMaster().subscribe(res => {
      const otherObj: TaskMasterModel = {
        taskName: 'OTHER',
        taskDescription: '',
        taskCharges: 0
      };
      res.push(otherObj);
      this.taskMasterList = res;
      this.isLoading.customerDataByMobNo = false;
    }, error => {
      this.isLoading.customerDataByMobNo = false;
    })
  }

  getValuesCustomer(customer: any) {
    if (customer === false) {
      this.sendValueCustomer = false;
    } else {
      this.customerProfileData = customer;
      console.log(this.customerProfileData);
    }
  }

  getValuesVehicle(vehicle: any) {
    if (vehicle === false) {
      this.sendValueVehicle = false;
    } else {
      this.vehicleData = vehicle;
      console.log(this.vehicleData);
    }
  }
 
  recieveVehicle() {
    Swal.fire({
      icon: 'info',
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Save',
      denyButtonText: `<i class="fa fa-thumbs-down"></i> Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.sendValueCustomer = true;
        this.sendValueVehicle = true;
        setTimeout(() => {
          this.submitVehicle();
        }, 500);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    });
  }

  submitVehicle() {
    console.log(this.serviceDTO.vehicleDetails);
    console.log(this.vehicleData);
    this.isLoading.customerDataByMobNo = true;
    return;
    this.customerProfileData.customerId = (this.serviceDTO.customerProfile !== null) ? this.serviceDTO.customerProfile.customerId : 0;
    const delivery: VehicleServiceRecieveDelivery = {
      VehicleServiceRecieveDeliveryId: 0,
      vehicleReceiveDate: new Date()
    }
    this.vehicleData.customerId = (this.serviceDTO.customerProfile !== null) ? this.serviceDTO.customerProfile.customerId : 0;
    const vehSerDetails: VehicleServiceDetails = {
      vehicleId: (this.vehicleData.vehicleId !== 0) ? this.vehicleData.vehicleId : 0,
      VehicleDetails: this.vehicleData,
      VehicleServiceRecieveDelivery: delivery,
      vehicleServiceDetailId: 0
    }
    this.customerProfileData.VehicleServiceDetail = vehSerDetails;
    console.log(this.customerProfileData);
    this.customerService.recieveVehicle(this.customerProfileData).subscribe(res => {
      console.log(res);
      if (res.action === 'success') {
        Swal.fire('Saved!', '', 'success');
        this.isLoading.customerDataByMobNo = false;
      }
      if (res.action === 'error') {
        Swal.fire(`Error !`, `${res.message}`, 'error');
        this.isLoading.customerDataByMobNo = false;
      }
    }, error => {
      const err = JSON.stringify(error.error.errors)
      Swal.fire(`Error !!!`, `${err}`, 'error');
      this.isLoading.customerDataByMobNo = false;
    });
  }
}
