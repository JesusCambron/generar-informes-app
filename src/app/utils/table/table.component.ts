import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() encabezados: Array<string> = [];
  @Input() tBodyPropiedades: Array<string> = [];
  @Input() tBodyData: Array<any> = [];
}
