import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css', '../../../../styles.css'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() version: string = 'primary';
  @Input() onClick: Function = () => console.error('Botón sin acción onClick');
}
