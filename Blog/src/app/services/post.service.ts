import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/libros.interface';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  libros: Libro[];

  constructor(private httpClient: HttpClient) {
    this.libros = [
      {
        titulo: 'Harry Potter y la piedra filosofal',
        texto: 'Harry Potter crece en la casa de sus tíos, los Dursley, quienes le ocultan su verdadera historia familiar; al cumplir Harry once años de edad, empiezan a llegarle cartas de remitente desconocido, que van aumentando en número a medida que sus tíos no dejan que las abra. Las mismas traen la noticia de que el niño ha sido admitido en el Colegio Hogwarts de Magia y Hechicería, ya que, al igual que sus padres, es mago. ',
        autor: 'J.k. Rowling',
        imagen: 'https://imagessl9.casadellibro.com/a/l/t5/79/9788498388879.jpg',
        fecha: new Date('1997'),
        categoria: 'Novela',
      },
      {
        titulo: 'Cincuenta Sombras de Grey',
        texto: 'La exitosa combinacion de historia romantica y juego erotico de alto voltaje que ha tocado la fibra de muchas mujeres',
        autor: 'E L James',
        imagen: 'https://images-na.ssl-images-amazon.com/images/I/41iI1HfqzuL._SX322_BO1,204,203,200_.jpg',
        fecha: new Date('2015'),
        categoria: 'Ficcion',
      },
      {
        titulo: 'Vivir con arte',
        texto: 'Todos tenemos algo en común: vivimos lo bueno, lo malo, lo peor y lo mejor. A todos nos toca luchar para conseguir lo mejor, sin dejar de disfrutar lo bueno; esforzándonos para pasar lo malo y superar lo peor. Porque de lo más bajo puedes subir a lo más alto... o al revés. Y el secreto de una buena vida siempre está en el mismo lugar: en tu cabeza, ¡y en tus manos',
        autor: 'Joaquin Sanchez',
        imagen: 'https://images-na.ssl-images-amazon.com/images/I/41+4s6+WkqS._SX327_BO1,204,203,200_.jpg',
        fecha: new Date('2021'),
        categoria: 'Random',
      },
      {
        titulo: 'Cocina de resistencia',
        texto: 'Alberto Chicote, uno de los chefs más exitosos y mediáticos del momento, nos invita a disfrutar de la cocina recordando las emociones que le han inspirado estos platos a lo largo de su vida.',
        autor: 'Alberto Chicote',
        imagen: 'https://images-na.ssl-images-amazon.com/images/I/51qtRHH7p7L._SX476_BO1,204,203,200_.jpg',
        fecha: new Date('2021'),
        categoria: 'Cocina',
      }
    ]
  }
  getAllPost(): Promise<Libro[]> {
    return new Promise<Libro[]>((resolve, reject) => {
      resolve(this.libros);
    })
  }

  add(pPost: any) {
    pPost.categoria = pPost.categoria.toUpperCase();
    this.libros.push(pPost);
    localStorage.setItem('arrLibros', JSON.stringify(this.libros));
  }



  getByCategoria(pCategoria: string): Promise<Libro[]> {
    return new Promise<Libro[]>(resolve => {
      const arrCategoriaLibro = [];
      for (let libro of this.libros) {
        if (libro.categoria === pCategoria) {
          arrCategoriaLibro.push(libro)
          console.log(libro);

        }
      }
      resolve(arrCategoriaLibro);
    })
  }

  getCategorias(): string[] {
    return [...new Set(this.libros.map(libros => libros.categoria))];
  }


}
