import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-title-box-container',
  templateUrl: './title-box-container.component.html',
  styleUrls: ['./title-box-container.component.scss']
})
export class TitleBoxContainerComponent {
  @Input() dynamicTitle!: string;
}
