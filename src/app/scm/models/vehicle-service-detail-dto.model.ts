import { EmailValidator } from "@angular/forms";
import { VehicleServiceDetails } from "./vehicle-service-details.model";

export class CustomerVehicleServiceDTO {
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

    public VehicleServiceDetail?: VehicleServiceDetails;
}