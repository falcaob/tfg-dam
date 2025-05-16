import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';  
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, InputTextModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      { label: 'Competencias', routerLink: '/competencias' },
      { label: 'Referentes AP', routerLink: '/referentes-ap' },
      { label: 'Referentes AH', routerLink: '/referentes-ah' },
      { label: 'Contacto', routerLink: '/contacto'}
    ];
  }

}
