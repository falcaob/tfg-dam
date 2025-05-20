import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-competencias',
  standalone: true,
  imports: [CardModule, AccordionModule],
  templateUrl: './competencias.component.html',
  styleUrl: './competencias.component.css'
})
export class CompetenciasComponent {

}
