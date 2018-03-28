import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ICategory } from '../category';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories = [];

  private timerSubscription;

  constructor(private _categoryService: CategoryService, private router: Router) { }

  ngOnInit() {

    this.getCategories();

  }

  getCategories(){
    this._categoryService.getCategories()
        .subscribe(data => this.categories = data);
  }

  addCategory(value){
    const obj = {
      name: value
    }
    console.log(value);
    this._categoryService.addCategory(obj);
    this.getCategories();
    this.router.navigate(['/category']);
  }

}
