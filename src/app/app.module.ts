import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { BodyComponent } from './modules/body/body.component';
import { MovieIndexComponent } from './modules/movie-index/movie-index.component';
import { MovieCardComponent } from './modules/movie-index/movie-card/movie-card.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { MovieDetailsComponent } from './modules/movie-index/movie-card/movie-details/movie-details.component';

/*interceptors*/
import { BlockUIInterceptor } from './interceptors/block-ui/block-ui.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error/http-error.interceptor';
/*imported moduls*/
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIComponent } from './shared/block-ui/block-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    MovieIndexComponent,
    MovieCardComponent,
    PaginationComponent,
    BlockUIComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BlockUIModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BlockUIInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
