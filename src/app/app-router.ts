import { Routes } from "@angular/router";
import {HomeRoute} from "./home/home-router";
import {PublicRoute} from "./public/public-router";
import {NoPageRoute} from "./page-not-found/no-page-router";

export const routes:  Routes = [...PublicRoute,...HomeRoute,...NoPageRoute];
