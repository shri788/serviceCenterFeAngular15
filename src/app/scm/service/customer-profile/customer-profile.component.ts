import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerProfileModel } from '../../models/customer-profile.model';
import { ServiceDTO } from '../../models/ServiceDTO.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit, OnChanges {
  customerProfileForm!: FormGroup;
  @Input() serviceDTO!: ServiceDTO;
  customerProfile!: CustomerProfileModel;
  @Input() sendValue = false;
  @Output() sendValueEvent = new EventEmitter()
  @Input() mobNo!: string;
  isShowForm = true;
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  onEdit() {
    this.isShowForm = !this.isShowForm;
  }

  ngOnChanges() {
    if (this.sendValue) {
      if (!this.customerProfileForm.valid) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops... Error Occurred.',
          text: 'Fill all the required fields !!',
          footer: 'Please provide maximum customer related information.'
        });
        this.sendValueEvent.emit(false);
        return;
      } else {
        this.sendValueEvent.emit(this.customerProfileForm.value);
        return;
      }
    }
    this.buildForm();
    if (this.serviceDTO !== undefined) {
      this.customerProfile = this.serviceDTO.customerProfile;
      if (this.customerProfile !== null) {
        this.patchFormValue();
        this.isShowForm = false;
      } else {
        this.customerProfileForm.controls['mobileNumber'].patchValue(this.mobNo);
      }
    }
  }

  patchFormValue() {
    const dob = (this.customerProfile?.dob )
    this.customerProfileForm.controls['customerId'].patchValue(this.customerProfile?.customerId);
    this.customerProfileForm.controls['gender'].patchValue(this.customerProfile?.gender);
    this.customerProfileForm.controls['customerName'].patchValue(this.customerProfile?.customerName);
    this.customerProfileForm.controls['mobileNumber'].patchValue(this.customerProfile?.mobileNumber);
    this.customerProfileForm.controls['email'].patchValue(this.customerProfile?.email);
    this.customerProfileForm.controls['dob'].patchValue(this.customerProfile?.dob);
    this.customerProfileForm.controls['dom'].patchValue(this.customerProfile?.dom);
    this.customerProfileForm.controls['address'].patchValue(this.customerProfile?.address);
    this.customerProfileForm.controls['addressPinCode'].patchValue(this.customerProfile?.addressPinCode);
  }

  buildForm() {
    this.customerProfileForm = this.fb.group({
      customerId: [''],
      gender: ['', [Validators.required]],
      customerName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      email: ['default@email.com', [Validators.email]],
      dob: ['1970-01-01T00:00:00.000Z'],
      dom: ['1970-01-01T00:00:00.000Z'],
      address: [''],
      addressPinCode: [0],
    })
  }
}
