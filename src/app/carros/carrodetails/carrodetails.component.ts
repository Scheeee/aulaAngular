import { Component, EventEmitter, Output, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carro';

@Component({
  selector: 'app-carrodetails',
  templateUrl: './carrodetails.component.html',
  styleUrls: ['./carrodetails.component.scss']
})
export class CarrodetailsComponent  {

  roteador = inject(ActivatedRoute);

  carro: Carro = new Carro();
  
  @Output() retorno = new EventEmitter<Carro>();
  constructor(){}

  salvar(){
    this.retorno.emit(this.carro);
  }

}
