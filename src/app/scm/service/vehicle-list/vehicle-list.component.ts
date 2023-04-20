import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnChanges {
  @Input() vehicles: any;
  activeBtn: boolean[] = [];
  vehicleForm!: FormGroup;

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

  
  ngOnChanges() {
    this.buildForm();
    // this.dataSource = new MatTableDataSource(this.vehicles);
  }

  onSelectVehicle(vehicle: any, i: number) {
    console.log(vehicle);
    this.activeBtn = [];
    this.activeBtn[i] = true;
    if (i === -1) {
      this.vehicles[-1] = vehicle;
      this.vehicleForm.reset();
    }
  }

  onlyAlphaNumeric(event: any) {
    // Allow only numeric input
    const isNumericInput = /^[a-zA-Z0-9]*$/.test(event.key);
    if (!isNumericInput && event.key !== "Backspace") {
      event.preventDefault();
    } 
  }
}

