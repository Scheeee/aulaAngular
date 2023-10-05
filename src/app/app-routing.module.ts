import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoasListComponent } from './app/pessoa/pessoas-list/pessoas-list.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { PessoadetailsComponent } from './app/pessoa/pessoas-list/pessoadetails/pessoadetails.component';
import { LivrodetailsComponent } from './livros/livrodetails/livrodetails.component';
import { CarrodetailsComponent } from './carros/carrodetails/carrodetails.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "adm", component: IndexComponent, children:[
    {path:"pessoas", component: PessoasListComponent},
    {path: "pessoas/login", component: PessoadetailsComponent},
    {path: "livros", component: LivroslistComponent},
    {path: "livros/adicionar", component: LivrodetailsComponent},
    {path: "carros", component: CarroslistComponent},
    {path: "carros/adicionar", component: CarrodetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
