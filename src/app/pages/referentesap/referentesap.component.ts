import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DataView } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-referentesap',
  standalone: true,
  imports: [CardModule, DataView, ButtonModule, Tag, CommonModule],
  templateUrl: './referentesap.component.html',
  styleUrl: './referentesap.component.css',
})
export class ReferentesapComponent {
  referentes = [
    {
      nombre: 'Laura Martínez',
      area: 'Heridas Crónicas',
      zona: 'C.S. Arahal',
      experiencia: 12,
      foto: 'enfermera1.jpg',
    },
    {
      nombre: 'Pablo Ruiz',
      area: 'Atención Domiciliaria',
      zona: 'C.S. Montecillos',
      experiencia: 9,
      foto: 'enfermero2.jpg',
    },
    {
      nombre: 'Jesús Palacios',
      area: 'Heridas Crónicas',
      zona: 'C.S. Coripe',
      experiencia: 6,
      foto: 'enfermero3.jpg',
    },
    {
      nombre: 'Rosario Salas',
      area: 'Educación Sanitaria',
      zona: 'C.S. Morón de la Frontera',
      experiencia: 4,
      foto: 'enfermera4.jpg',
    },
    {
      nombre: 'Inés Torres',
      area: 'Heridas Crónicas',
      zona: 'C.S. Los Palacios',
      experiencia: 5,
      foto: 'enfermera5.jpg',
    },
  ];
}
