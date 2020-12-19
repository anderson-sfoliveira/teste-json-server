import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient ) { }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/cidades')
      .toPromise();
  }

  adicionar(cidade: any): Promise<any> {
    return this.http.post('http://localhost:3000/cidades', cidade)
      .toPromise()
  }

  atualizar(cidade: any): Promise<any> {
    return this.http.put(`http://localhost:3000/cidades/${cidade.id}`, cidade)
      .toPromise()
  }

  excluir(id): Promise<void> {
    return this.http.delete(`http://localhost:3000/cidades/${id}`)
      .toPromise()
      .then(() => null)
  }
}
