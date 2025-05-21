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
      label: 'Coordinadora de Referentes: Inmaculada Naranjo',
      expanded: true,
      data: {
        nombre: 'Inmaculada Naranjo',
        hospital: 'Hospital Universitario Nuestra Señora de Valme',
        experiencia: 8,
        foto: 'enfermera_hosp1.jpg'
      },
      children: [
        {
          label: 'María Herrera',
          expanded: true,
          data: {
            hospital: 'Hospital El Tomillar',
            experiencia: 12,
            foto: 'enfermera_hosp2.jpg'
          },
          children: [
            {
              label: 'Ana Gómez',
              data: {
                hospital: 'Hospital El Tomillar',
                experiencia: 10,
                foto: 'enfermera_hosp3.jpg'
              }
            },
            {
              label: 'Jesús Valle',
              data: {
                hospital: 'Hospital El Tomillar',
                experiencia: 10,
                foto: 'enfermero_hosp4.jpg'
              }
            }
          ]
        },
        {
          label: 'Luis Fernández',
          expanded: true,
          data: {
            hospital: 'Hospital Universitario Nuestra Señora de Valme',
            experiencia: 15,
            foto: 'enfermero_hosp5.jpg'
          }
        }
      ]
    }
  ];
}
