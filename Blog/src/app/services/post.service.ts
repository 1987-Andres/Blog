import { HttpClient, HttpHeaders } from '@angular/common/http';
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
        titulo: 'El señor de los Anillos. La comunidad del anillo',
        texto: 'En la Tierra Media, el Señor Oscuro Sauron ordenó a los Elfos que forjaran los Grandes Anillos de Poder. Tres para los reyes Elfos, siete para los Señores Enanos, y nueve para los Hombres Mortales. Pero Saurón también forjó, en secreto, el Anillo Único, que tiene el poder de esclavizar toda la Tierra Media.',
        autor: 'Peter Jackson',
        imagen: 'https://pics.filmaffinity.com/the_lord_of_the_rings_the_fellowship_of_the_ring-952398002-large.jpg',
        fecha: new Date('2001'),
        categoria: 'Fantastico',
      },
      {
        titulo: 'El señor de los Anillos. Las dos torres',
        texto: 'Tras la disolución de la Compañía del Anillo, Frodo y su fiel amigo Sam se dirigen hacia Mordor para destruir el Anillo Único y acabar con el poder de Sauron, pero les sigue un siniestro personaje llamado Gollum. Mientras, y tras la dura batalla contra los orcos donde cayó Boromir, el hombre Aragorn, el elfo Legolas y el enano Gimli intentan rescatar a los medianos Merry y Pipin, secuestrados por los orcos de Mordor.',
        autor: 'Peter Jackson',
        imagen: 'https://pics.filmaffinity.com/the_lord_of_the_rings_the_two_towers-450612576-mmed.jpg',
        fecha: new Date('2002'),
        categoria: 'Fantastico',
      },
      {
        titulo: 'El señor de los Anillos. El retorno del rey',
        texto: 'Las fuerzas de Saruman han sido destruidas, y su fortaleza sitiada. Ha llegado el momento de decidir el destino de la Tierra Media, y, por primera vez, parece que hay una pequeña esperanza. El interés del señor oscuro Sauron se centra ahora en Gondor, el último reducto de los hombres, cuyo trono será reclamado por Aragorn. Sauron se dispone a lanzar un ataque decisivo contra Gondor. Mientras tanto, Frodo y Sam continuan su camino hacia Mordor, con la esperanza de llegar al Monte del Destino.',
        autor: 'Peter Jackson',
        imagen: 'https://pics.filmaffinity.com/the_lord_of_the_rings_the_two_towers-450612576-mmed.jpg',
        fecha: new Date('2003'),
        categoria: 'Fantastico',
      },
      {
        titulo: 'Indiana Jones .En busca del arca perdida',
        texto: 'Año 1936. Indiana Jones es un profesor de arqueología, dispuesto a correr peligrosas aventuras con tal de conseguir valiosas reliquias históricas. Después de una infructuosa misión en Sudamérica, el gobierno estadounidense le encarga la búsqueda del Arca de la Alianza, donde se conservan las Tablas de la Ley que Dios entregó a Moisés',
        autor: 'George Lucas, Philip Kaufman',
        imagen: 'https://pics.filmaffinity.com/indiana_jones_raiders_of_the_lost_ark-316486950-mmed.jpg',
        fecha: new Date('1981'),
        categoria: 'Aventura',
      },
      {
        titulo: 'Origen',
        texto: 'Dom Cobb (DiCaprio) es un experto en el arte de apropiarse, durante el sueño, de los secretos del subconsciente ajeno. La extraña habilidad de Cobb le ha convertido en un hombre muy cotizado en el mundo del espionaje, pero también lo ha condenado a ser un fugitivo y, por consiguiente, a renunciar a llevar una vida normal. Su única oportunidad para cambiar de vida será hacer exactamente lo contrario de lo que ha hecho siempre: la incepción, que consiste en implantar una idea en el subconsciente en lugar de sustraerla. Sin embargo, su plan se complica debido a la intervención de alguien que parece predecir cada uno de sus movimientos, alguien a quien sólo Cobb podrá descubrir',
        autor: 'Christopher Nolan',
        imagen: 'https://pics.filmaffinity.com/inception-652954101-mmed.jpg',
        fecha: new Date('2010'),
        categoria: 'Thriller',
      },
      {
        titulo: 'Shutter Island',
        texto: 'En el verano de 1954, los agentes judiciales Teddy Daniels (DiCaprio) y Chuck Aule (Ruffalo) son destinados a una remota isla del puerto de Boston para investigar la desaparición de una peligrosa asesina (Mortimer) que estaba recluida en el hospital psiquiátrico Ashecliffe, un centro penitenciario para criminales perturbados dirigido por el siniestro doctor John Cawley (Kingsley). Pronto descubrirán que el centro guarda muchos secretos y que la isla esconde algo más peligroso que los pacientes. ',
        autor: 'Christopher Nolan',
        imagen: 'https://pics.filmaffinity.com/shutter_island-215721197-mmed.jpg',
        fecha: new Date('2010'),
        categoria: 'Thriller',
      },
      {
        titulo: 'Gladiator',
        texto: 'En el año 180, el Imperio Romano domina todo el mundo conocido. Tras una gran victoria sobre los bárbaros del norte, el anciano emperador Marco Aurelio (Richard Harris) decide transferir el poder a Máximo (Russell Crowe), bravo general de sus ejércitos y hombre de inquebrantable lealtad al imperio. Pero su hijo Cómodo (Joaquin Phoenix), que aspiraba al trono, no lo acepta y trata de asesinar a Máximo ',
        autor: 'Ridley Scott',
        imagen: 'https://pics.filmaffinity.com/gladiator-564554218-mmed.jpg',
        fecha: new Date('2000'),
        categoria: 'Historia',
      },
      {
        titulo: 'La vida es Bella',
        texto: 'En 1939, a punto de estallar la Segunda Guerra Mundial (1939-1945), el extravagante Guido llega a Arezzo, en la Toscana, con la intención de abrir una librería. Allí conoce a la encantadora Dora y, a pesar de que es la prometida del fascista Rodolfo, se casa con ella y tiene un hijo. Al estallar la guerra, los tres son internados en un campo de exterminio, donde Guido hará lo imposible para hacer creer a su hijo que la terrible situación que están padeciendo es tan sólo un juego ',
        autor: 'Roberto Benigni',
        imagen: 'https://pics.filmaffinity.com/la_vita_e_bella-646167341-mmed.jpg',
        fecha: new Date('1997'),
        categoria: 'Drama',
      },
      {
        titulo: 'Salvar al Soldado Ryan',
        texto: 'Segunda Guerra Mundial, 1944. Tras el desembarco de los Aliados en Normandía, a un grupo de soldados americanos se le encomienda una peligrosa misión: poner a salvo al soldado James Ryan. Los hombres de la patrulla del capitán John Miller deben arriesgar sus vidas para encontrar a este soldado, cuyos tres hermanos han muerto en la guerra. Lo único que se sabe del soldado Ryan es que se lanzó con su escuadrón de paracaidistas detrás de las líneas enemigas.  ',
        autor: 'Steven Speilberg',
        imagen: 'https://pics.filmaffinity.com/saving_private_ryan-585301228-mmed.jpg',
        fecha: new Date('1998'),
        categoria: 'Bélica',
      },
      {
        titulo: 'Lilo & Stitch ',
        texto: 'Lilo, una niña hawaiana que se siente sola, decide adoptar un "perro" muy feo al que llama Stitch, que podría ser la compañía perfecta si no fuera en realidad el fruto de un experimento genético que se ha escapado de un planeta alienígena y que ha aterrizado en la tierra por casualidad. Con su amor y su inquebrantable fe en el "ohana" (el concepto hawaiano de la familia), Lilo termina conquistando el corazón de Stitch y le ofrece algo que el original perro nunca pensó tener: un hogar.',
        autor: 'Chris Sanders',
        imagen: 'https://pics.filmaffinity.com/lilo_stitch-502239805-mmed.jpg',
        fecha: new Date('2002'),
        categoria: 'Animación',
      },
    ]
  }
  getAllPost(): Promise<Libro[]> {
    return new Promise<Libro[]>((resolve, reject) => {
      resolve(this.libros);
    })
  }

  add(nuevoLibro: Libro) {
    this.libros.push(nuevoLibro);
  }


}
