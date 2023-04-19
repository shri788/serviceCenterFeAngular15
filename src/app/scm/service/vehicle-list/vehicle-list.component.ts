import { Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
})
export class VehicleListComponent implements OnChanges {
  @Input() vehicles: any;
  dataSource: any;
  displayedColumns: string[] = ['id', 'type', 'number', 'action'];

  
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.vehicles);
  }
}

