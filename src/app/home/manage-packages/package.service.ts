import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {packageUrl} from '../../services/app-http/backendUrlStrings';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }

getPackage(id: number) {
}
getAllPackages() {
  return this.http.get(packageUrl.GET_PACKAGES)
    .map(
      (response: any) => {
        const packages = response;
        return packages;
      });
}
createPackage(pack: any) {
    console.log(pack);
    return this.http.post(packageUrl.CREATE_PACKAGE, pack);
  }
updatePackage(pack: any) {
   return this.http.post('/api/protected/business/packages/' + pack.id + '/update', pack);
}
}
