import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
})
export class InputDateComponent {
  @Input() inputName: string = '';
  @Input() inputId: string = '';
}
