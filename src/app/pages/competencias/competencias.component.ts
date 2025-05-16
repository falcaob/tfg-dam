import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-competencias',
  standalone: true,
  imports: [CardModule, RouterLink],
  templateUrl: './competencias.component.html',
  styleUrl: './competencias.component.css'
})
export class CompetenciasComponent {

}
