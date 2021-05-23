import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Libro } from '../interfaces/libros.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() libroCreado: EventEmitter<Libro>;

  nuevoLibro: Libro;

  constructor() {
    this.nuevoLibro = {
      titulo: '',
      texto: '',
      autor: '',
      imagen: '',
      categoria: ''
    }
    this.libroCreado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick() {
    this.libroCreado.emit(this.nuevoLibro);
    this.nuevoLibro = {
      titulo: '',
      texto: '',
      autor: '',
      imagen: '',
      categoria: ''
    }
  }

}
