import { CustomerProfileModel } from "./customer-profile.model";
import { VehicleDetailsModel } from "./vehicle-details.model";
import { VehicleServiceRecieveDelivery } from "./vehicle-service-delivery.model";

export class VehicleServiceDetails {
    public vehicleServiceDetailId?: number;
    public vehicleId?: number;
    public VehicleDetails?: VehicleDetailsModel;
    public VehicleServiceRecieveDelivery?: VehicleServiceRecieveDelivery;
    public customerId?: number;
    public CustomerProfile?: CustomerProfileModel;
}