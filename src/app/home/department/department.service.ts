import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {departmentUrl} from "../../services/app-http/backendUrlStrings";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private http: HttpClient
  ) { }

  createDepartment(data: any) {
    return this.http.post(departmentUrl.CREATE_DEPARTMENT, data);
  }
  listDepartments() {
    return this.http.get(departmentUrl.GET_DEPARTMENT)
      .map(
        (response: Response) => {
          return response;
        }
      );
  }
  updateDepartment(department: any){
    return this.http.post('/api/protected/business/product/department/' +  department.id  + '/update', department);
  }
}
