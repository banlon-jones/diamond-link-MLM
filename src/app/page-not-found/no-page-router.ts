import { Routes } from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found.component";


export const NoPageRoute: Routes = [

  {
    path: '**', component: PageNotFoundComponent
  }
];
