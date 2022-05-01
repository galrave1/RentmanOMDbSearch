import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './modules/body/body.component';
import { OMDBSearchService } from './modules/body/service/omdbsearch.service';
import { MovieIndexComponent } from './modules/movie-index/movie-index.component';

const routes: Routes = [
  { path: 'Home', component: BodyComponent },
  { path: '**', component: BodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }