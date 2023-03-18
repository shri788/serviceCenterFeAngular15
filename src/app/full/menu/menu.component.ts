import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  @Input() menus:any;
  @Input() heading: any;
  @Input() headingIcon: any;
}
