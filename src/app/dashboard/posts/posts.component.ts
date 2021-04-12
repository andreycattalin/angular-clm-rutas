import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  myPosts: Array<any> = []

  constructor( private router: Router, private active: ActivatedRoute) {
    this.myPosts =  [
      {
        id: 2938,
        title: "El mejor articulo de mi vida"
      },
      {
        id: 3243445,
        title: "Lo que sea"
      },
      {
        id: 23,
        title: "Ok"
      }
    ]
  }

  ngOnInit() {
    this.active.queryParams.subscribe( params => {
      console.log(params.search)
      console.log(params.date)
    })
  }

  detail(id: any) {

    this.router.navigate(["/dashboard/posts/" + id])

  }

  buscar(name: string, year: string) {
    this.router.navigate(["/dashboard/posts"],  { queryParams: {  search: name, date: year}})
  }
}
