import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  libros: any;

  constructor(private postService: PostService) {
  }



  ngOnInit(): void {

    this.postService.getAllPost()
      .then(response => {
        this.libros = response;

      })
      .catch(error => console.log(error))
  }


  async onChange($event: any) {
    if ($event.target.value === 'todos') {
      this.libros = await this.postService.getAllPost();
    } else {
      this.libros = await this.postService.getByCategoria($event.target.categoria);
    }
  }
}
