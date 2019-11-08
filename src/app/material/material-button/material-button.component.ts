import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.css']
})
export class MaterialButtonComponent implements OnInit {

  formulario = {
    valido: true
  };

  constructor() { }

  ngOnInit() {

    setTimeout(() => {

      this.formulario.valido = false;

    }, 4000);

  }

  onClick(e){

    console.log('click event ', e);

  }

}
