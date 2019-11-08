import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Estudiante} from '../../shared/models/estudiante';

@Component({
  selector: 'app-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {
  readonly DEFAULT_PICTURE = 'https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=';

  @Input() estudiante: Estudiante;
  @Output() onMouseOver = new EventEmitter<Estudiante>();



  constructor() { }

  ngOnInit() {
  }

  onClick(e: Estudiante) {
    this.onMouseOver.emit(e);
  }

}
