import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule,
    ToastModule,
    InputTextModule,
    InputNumberModule,
    CascadeSelectModule,
    EditorModule,
    ButtonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  providers: [MessageService]
})
export class ContactoComponent {

  form = {
    nombre: '',
    telefono: null,
    comunidad: null,
    mensaje: ''
  };

  comunidades = [
    {
      name: 'Andalucía',
      provincias: [{ name: 'Sevilla' }, { name: 'Málaga' }, { name: 'Granada' }]
    },
    {
      name: 'Cataluña',
      provincias: [{ name: 'Barcelona' }, { name: 'Tarragona' }]
    },
    {
      name: 'Madrid',
      provincias: [{ name: 'Madrid' }]
    },
    {
      name: 'Valencia',
      provincias: [{ name: 'Valencia' }, { name: 'Alicante' }]
    },
    {
      name: 'Galicia',
      provincias: [{ name: 'A Coruña' }, { name: 'Ourense' }]
    }
  ];

  constructor(private messageService: MessageService) {}

  enviarFormulario() {
    this.messageService.add({
      severity: 'success',
      summary: 'Enviado',
      detail: 'El formulario ha sido enviado correctamente'
    });
  }

}
