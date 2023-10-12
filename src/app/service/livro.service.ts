import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../models/livro';

@Injectable({
    providedIn: 'root'
  })

export class LivroService {

    API: string = 'http://localhost:8080/api/livro';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API);
  }

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.API, livro);
  }

  delete(id: number): Observable<any> {

    let params =new HttpParams()
    .set('id', id.toString());

    return this.http.delete<any>(this.API, {params: params});
  }
  

}
