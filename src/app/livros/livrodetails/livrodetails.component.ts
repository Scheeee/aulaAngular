import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../livro';


@Component({
  selector: 'app-livrodetails',
  templateUrl: './livrodetails.component.html',
  styleUrls: ['./livrodetails.component.scss']
})
export class LivrodetailsComponent  {

  roteador = inject(ActivatedRoute);
 livro: Livro = new Livro;
  

 @Output() retorno = new EventEmitter<Livro>();

  constructor(){}

 
  salvar(){
    this.retorno.emit(this.livro);
  }


  
  

}
