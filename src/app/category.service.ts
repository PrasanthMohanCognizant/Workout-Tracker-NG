import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from './category';

@Injectable()
export class CategoryService {

  private _url: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<ICategory[]>(this._url+"/categories");
  }

  addCategory(category) {
    console.log("In service");
    this.http.post(this._url+"/categories", category).subscribe(res => console.log('Done'));
  }

}
