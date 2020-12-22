import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient ) { }

  consultar(): Promise<any> {
    return this.http.get('http://localhost:3000/cidades')
      .toPromise()
      .catch(erro => {
        return Promise.reject(`Erro ao consultar cidades`);
      })
  }

  adicionar(cidade: any): Promise<any> {
    return this.http.post('http://localhost:3000/cidades', cidade)
      .toPromise()
      .catch(erro => {
        return Promise.reject(`Erro ao adicionar cidade`);
      })
  }

  atualizar(cidade: any): Promise<any> {
    return this.http.put(`http://localhost:3000/cidades/${cidade.id}`, cidade)
      .toPromise()
      .catch(erro => {
        return Promise.reject(`Erro ao atualizar Id : ${cidade.id}`);
      })
  }

  excluir(id): Promise<void> {
    return this.http.delete(`http://localhost:3000/cidades/${id}`)
      .toPromise() // este metódo é usado para indicar que o metódo "fez uma promessa" que irá retornar um objeto.
      .then(() => null)
      .catch(erro => {
        return Promise.reject(`Erro ao excluir Id : ${id}`);
      })
  }
}
