import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/libros.interface';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  libros: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPost()
      .then(response => {
        this.libros = response;

      })
      .catch(error => console.log(error))
  }
  onSubmit($event: any) {
    console.log($event);

  }
}
