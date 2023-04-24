import { CustomerProfileModel } from "./customer-profile.model";

export class VehicleDetailsModel {
    public vehicleId?: number;
    public vehicleType?: string;
    public vehicleNumber?: string;
    public customerId?: number;
    public CustomerProfile?: CustomerProfileModel;
}