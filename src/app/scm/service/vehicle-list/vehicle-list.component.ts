import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnChanges {
  @Input() vehicles: any;
  activeBtn: boolean[] = [];
  vehicleForm!: FormGroup;
  @Input() sendValue = false;
  @Output() sendValueEvent = new EventEmitter();
  selectedVehicle!: any; 
  @Output() vehicleSelectedEvent = new EventEmitter();
  isOtherVehicle = false;

  constructor(
    private fb: FormBuilder
  ){}
  // dataSource: any;
  // displayedColumns: string[] = ['id', 'type', 'number', 'action'];

  buildForm() {
    this.vehicleForm = this.fb.group({
      vehicleId: [0],
      vehicleType: ['', [Validators.required]],
      vehicleNumber: ['', [Validators.required]],
    })
  }

  onAddOtherVehicle() {
    this.isOtherVehicle = !this.isOtherVehicle;
    if (!this.isOtherVehicle) {
      this.vehicleForm.reset(); 
    }
  }

  
  ngOnChanges() {
   if (this.vehicles === null) {
    this.vehicles = [];
   }
   if (this.sendValue) {
      if (this.selectedVehicle === undefined) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops... Error Occurred.',
          text: 'Fill all the required fields !!',
          footer: 'Please select vehicle from list or provide vehicle related details.'
        });
        this.sendValueEvent.emit(false);
        return;
      } else {
        this.sendValueEvent.emit(this.selectedVehicle);
        return;
      }
    }
    this.buildForm();
    // this.dataSource = new MatTableDataSource(this.vehicles);
  }

  onSelectVehicle(vehicle: any, i: number) {
    this.activeBtn = [];
    this.activeBtn[i] = true;
    this.selectedVehicle = vehicle;
    if (i === -1) {
      this.vehicles[-1] = vehicle;
      this.vehicleForm.reset();
    }
    this.vehicleSelectedEvent.emit(this.selectedVehicle);
  }

  onlyAlphaNumeric(event: any) {
    // Allow only numeric input
    const isNumericInput = /^[a-zA-Z0-9]*$/.test(event.key);
    if (!isNumericInput && event.key !== "Backspace") {
      event.preventDefault();
    } 
  }
}

