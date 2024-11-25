import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
import { RouterLink } from '@angular/router';
import { AuthService } from '../common/services/auth.service';
import * as icons from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class MainPage implements OnInit {

  cursos = [
    { nombre: 'Curso de TypeScript'},
    { nombre: 'Curso de Python'},
    { nombre: 'Curso de Git y GitHub'},
    { nombre: 'Curso de Java y JavaScript'},
    { nombre: 'Curso de Inteligencia Artificial'},
    { nombre: 'Curso de Ionic y Angular'}
  ];

  searchQuery: string ='';
  filteredCursos: any[] = [];
  login: boolean = false;

  constructor(private auth : AuthService) {
    this.auth.stateUser().subscribe( res => {
      if(res){
        this.login = true;
        res.uid
      } else {
        console.log('no está logeado')
        this.login = false;
      }
    })
    addIcons({ add: icons['add']});
  }

  ngOnInit() {
    this.filteredCursos = this.cursos;
  }

  searchCursos(){
    if (this.searchQuery.trim() !== '') {
      this.filteredCursos = this.cursos.filter(curso =>
        curso.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredCursos = this.cursos;
    }
  }

}
