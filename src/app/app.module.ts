import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { BodyComponent } from './modules/body/body.component';
import { MovieIndexComponent } from './modules/movie-index/movie-index.component';
import { MovieCardComponent } from './modules/movie-index/movie-card/movie-card.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { MovieDetailsComponent } from './modules/movie-details/movie-details.component';
import { BlockUIComponent } from './shared/block-ui/block-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MovieIndexComponent,
    MovieCardComponent,
    PaginationComponent,
    MovieDetailsComponent,
    BlockUIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
