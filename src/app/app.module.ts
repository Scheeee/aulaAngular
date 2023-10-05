import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasListComponent } from './app/pessoa/pessoas-list/pessoas-list.component';
import { IndexComponent } from './layout/index/index.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PessoadetailsComponent } from './app/pessoa/pessoas-list/pessoadetails/pessoadetails.component';
import { LoginComponent } from './sistema/login/login.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrodetailsComponent } from './carros/carrodetails/carrodetails.component';
import { LivrodetailsComponent } from './livros/livrodetails/livrodetails.component';


@NgModule({
  declarations: [
    AppComponent,
    PessoasListComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    PessoadetailsComponent,
    LoginComponent,
    CarroslistComponent,
    LivroslistComponent,
    CarrodetailsComponent,
    LivrodetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
