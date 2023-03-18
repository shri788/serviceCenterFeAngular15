import { Component } from '@angular/core';

@Component({
  selector: 'app-recieve-vehicle',
  templateUrl: './recieve-vehicle.component.html',
  styleUrls: ['./recieve-vehicle.component.scss']
})
export class RecieveVehicleComponent {
  mobileNoAutoFill!: boolean;

  onKeyDown(event: any) {
    // Allow only numeric input
    const isNumericInput = /^\d*$/.test(event.key);
    if (!isNumericInput) {
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
  
}
