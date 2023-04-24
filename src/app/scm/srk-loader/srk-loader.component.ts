import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-srk-loader',
  templateUrl: './srk-loader.component.html',
  styleUrls: ['./srk-loader.component.scss']
})
export class SrkLoaderComponent {
  @Input() label: string = '';
  imgSrc = '../../../assets/images/loader.gif';
}
