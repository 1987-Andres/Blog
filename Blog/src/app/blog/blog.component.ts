import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Libro } from '../interfaces/libros.interface'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  listadoLibros: Libro[];
  categoriaLibros: string[];

  constructor(private postService: PostService) {
    this.listadoLibros = [];
    this.categoriaLibros = [];
  }

  async ngOnInit() {
    if (localStorage.getItem('arrLibros')) {
      const strJson = localStorage.getItem('arrLibros');
      // this.listadoLibros = JSON.parse(strJson);
      //console.log(strJson)
    } else {
      this.listadoLibros = [];
    };

    try {
      this.listadoLibros = await this.postService.getAllPost();
    } catch (error) {

    }
    this.categoriaLibros = this.postService.getCategorias();
  }


  async onChange($event: any) {
    console.log($event);

    if ($event.target.value === 'todos') {
      this.listadoLibros = await this.postService.getAllPost();
    } else {
      this.listadoLibros = await this.postService.getByCategoria($event.target.value);
    }
  } catch(error: any) {

  }

}
