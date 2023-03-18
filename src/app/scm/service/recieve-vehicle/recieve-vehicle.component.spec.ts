import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieveVehicleComponent } from './recieve-vehicle.component';

describe('RecieveVehicleComponent', () => {
  let component: RecieveVehicleComponent;
  let fixture: ComponentFixture<RecieveVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieveVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecieveVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
