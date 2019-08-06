import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddUrlsComponent} from './components/add-urls/add-urls.component';
import {BrokenUrlsComponent} from './components/broken-urls/broken-urls.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "addurl", component: AddUrlsComponent},
  {path: "brokenurls", component: BrokenUrlsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
