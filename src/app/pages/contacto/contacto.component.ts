import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    InputTextModule,
    InputNumberModule,
    EditorModule,
    ButtonModule,
    DropdownModule,
    CommonModule,
    FieldsetModule, 
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  providers: [MessageService],
})
export class ContactoComponent {
  form = {
    nombre: '',
    telefono: null,
    provincia: null,
    mensaje: '',
  };

  provinciasAndalucia = [
    { label: 'Sevilla', value: 'Sevilla' },
    { label: 'Málaga', value: 'Málaga' },
    { label: 'Granada', value: 'Granada' },
    { label: 'Córdoba', value: 'Córdoba' },
    { label: 'Cádiz', value: 'Cádiz' },
    { label: 'Huelva', value: 'Huelva' },
    { label: 'Almería', value: 'Almería' },
    { label: 'Jaén', value: 'Jaén' },
  ];

  constructor(private messageService: MessageService) {}

  sendForm() {
    this.messageService.add({
      severity: 'success',
      summary: 'Gracias por tu mensaje',
      detail: 'El formulario ha sido enviado correctamente',
    });
  }
}
