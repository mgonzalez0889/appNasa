import { Component, OnInit } from '@angular/core';
import {Estudiante} from '../../shared/models/estudiante';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  estudiantes: Estudiante[];



  constructor() {
    console.log('inicializando el componente MaterialList');
    this.estudiante1 = {
      id: 1,
      nombre: 'Mijail Gonzalez',
      ciudad: 'Catalunya',
      fotoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUfwFpfaG5NOqNgI8gXPjoPk-3ENH8S4a6OnVU2ImqeIezqng6&s'
    };

    this.estudiante2 = {
      id: 2,
      nombre: 'Luis Aviles',
      ciudad: 'Cochabamba',
      fotoURL: 'https://texasbarblog.lexblogplatformtwo.com/files/2014/05/NickLaurent1.gif'
    };

    this.estudiante3 = {
      id: 3,
      nombre: 'Sara Hernandez',
      ciudad: 'Barranquilla',
      fotoURL: 'https://pixel.nymag.com/imgs/fashion/daily/2016/10/01/10-tiffanytrump.w700.h700.jpg'
    };
    this.estudiantes =  [this.estudiante1, this.estudiante2, this.estudiante3];

    setTimeout(() => {
      this.estudiante3 = {
        id: 4,
        nombre: 'Raquel Laforie',
        ciudad: 'Sao Paulo',
        fotoURL: 'https://texasbarblog.lexblogplatformtwo.com/files/2014/06/Arielle-Prangner1.jpg'
      };
    }, 4000 );
  }

  ngOnInit() {
  }

  onMouseClick($event) {
    console.log($event.nombre);

  }

}
