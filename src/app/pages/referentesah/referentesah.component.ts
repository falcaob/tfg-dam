import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TreeNode } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-referentesah',
  standalone: true,
  imports: [CardModule, OrganizationChartModule, CommonModule],
  templateUrl: './referentesah.component.html',
  styleUrl: './referentesah.component.css'
})
export class ReferentesahComponent {
  referentesHospital: TreeNode[] = [
    {
      label: 'Coordinadora de Referentes',
      expanded: true,
      data: {
        nombre: 'Dra. Carmen López',
        hospital: 'Hospital Central de Madrid',
        experiencia: 20,
        foto: 'enfermera1.jpg'
      },
      children: [
        {
          label: 'Dr. Mario Torres',
          expanded: true,
          data: {
            hospital: 'Hospital Universitario La Paz',
            experiencia: 12,
            foto: 'assets/img/mario.png'
          },
          children: [
            {
              label: 'Dra. Ana Gómez',
              data: {
                hospital: 'Hospital Clínico San Carlos',
                experiencia: 8,
                foto: 'assets/img/ana.png'
              }
            },
            {
              label: 'Dra. Nuria Sánchez',
              data: {
                hospital: 'Hospital 12 de Octubre',
                experiencia: 10,
                foto: 'assets/img/nuria.png'
              }
            }
          ]
        },
        {
          label: 'Dr. Luis Fernández',
          expanded: true,
          data: {
            hospital: 'Hospital Gregorio Marañón',
            experiencia: 15,
            foto: 'assets/img/luis.png'
          }
        }
      ]
    }
  ];
}
