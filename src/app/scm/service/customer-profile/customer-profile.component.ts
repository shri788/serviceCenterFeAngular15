import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerProfileModel } from '../../models/customer-profile.model';
import { ServiceDTO } from '../../models/ServiceDTO.model';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit, OnChanges {
  customerProfileForm!: FormGroup;
  @Input() serviceDTO!: ServiceDTO;
  customerProfile!: CustomerProfileModel;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges() {
    if (this.serviceDTO !== undefined) {
      this.customerProfile = this.serviceDTO.customerProfile;
      this.patchFormValue();
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
      email: ['', [Validators.email]],
      dob: [''],
      dom: [''],
      address: ['', [Validators.minLength(20)]],
      addressPinCode: ['', [Validators.minLength(6)]],
    })
  }
}
