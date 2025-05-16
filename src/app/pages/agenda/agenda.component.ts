import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [CardModule, TableModule, ButtonModule,
    TagModule, RouterLink],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  events = [
  {
    name: 'Jornada de Actualización en Heridas',
    date: '2025-06-12',
    location: 'Hospital Virgen del Rocío',
    category: 'Formación',
    participants: 120,
    status: 'activo',
  },
  {
    name: 'Reunión EPA-HCC Área Sur',
    date: '2025-05-30',
    location: 'Distrito Sanitario Sur',
    category: 'Reunión',
    participants: 25,
    status: 'programado',
  },
  {
    name: 'Curso de Valoración de Heridas',
    date: '2025-07-01',
    location: 'Hospital de Valme',
    category: 'Docencia',
    participants: 80,
    status: 'completo',
  },
  {
    name: 'Charla a Pacientes Crónicos',
    date: '2025-06-18',
    location: 'Centro de Salud Bami',
    category: 'Divulgación',
    participants: 40,
    status: 'activo',
  },
  {
    name: 'Sesión Clínica Multidisciplinar',
    date: '2025-05-20',
    location: 'Hospital Macarena',
    category: 'Clínico',
    participants: 30,
    status: 'cancelado',
  },
];

getSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'contrast' | 'secondary' | undefined {
  switch (status.toLowerCase()) {
    case 'disponible':
      return 'success';
    case 'agotado':
      return 'danger';
    case 'pendiente':
      return 'warn';
    default:
      return 'secondary';
  }
}



}
