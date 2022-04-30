import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './modules/body/body.component';
import { MovieIndexComponent } from './modules/movie-index/movie-index.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'search-resulst', component: MovieIndexComponent },
  { path: '**', component: BodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }