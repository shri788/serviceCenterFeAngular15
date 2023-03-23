import { EmailValidator } from "@angular/forms";

export class CustomerProfileModel {
    public customerId?: number;
    public gender: string = '';
    public customerName: string = '';
    public mobileNumber: number = 0;
    public email?: EmailValidator;
    public dob?: Date;
    public dom?: Date;
    public address?: string;
    public addressPinCode?: number;
    public lastServiceDate?: Date;
    public dueInMonths?: number;
}