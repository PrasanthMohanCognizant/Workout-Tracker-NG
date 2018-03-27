import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories = [
    {"name": "running"},
    {"name": "jumping"},
    {"name": "walking"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
