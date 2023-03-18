import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrkLoaderComponent } from './srk-loader.component';

describe('SrkLoaderComponent', () => {
  let component: SrkLoaderComponent;
  let fixture: ComponentFixture<SrkLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrkLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrkLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
