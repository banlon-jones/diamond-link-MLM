import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {categoriesUrl} from "../../services/app-http/backendUrlStrings";
import "rxjs-compat/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
  ) { }
  addCategory(data: any) {
    return this.http.post(categoriesUrl.CREATE_CATEGORY, data);
  }
  getCategories() {
    return this.http.get(categoriesUrl.GET_CATEGORIES)
      .map(
        (response: Response) => {
          const categories = response;
          return categories;
        }
      );
  }
  updateCategory(category: any) {
   return this.http.post('/api/protected/business/product/category/' +  category.id  + '/update', category);
  }
}
