import { Component, OnInit } from '@angular/core';
import { menus } from '../menus/menu';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

export class TopbarComponent implements OnInit {
  isMenusFound = false;
  headingList: any = [];
  menuList: any = [];
  logoImg = 'assets/images/ram.png';
  constructor() { }

  ngOnInit(): void {
    menus.map(obj => {
      this.headingList.push(obj);
      this.menuList.push(obj.submenu);
    });
    this.isMenusFound = true;
  }

}
