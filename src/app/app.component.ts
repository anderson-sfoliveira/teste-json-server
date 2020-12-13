import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cidades = [
    { id: 1, nome: 'Uberlândia'},
    { id: 2, nome: 'São Paulo'},
    { id: 3, nome: 'Rio de Janeiro'},
    { id: 4, nome: 'Campo Grande'}
  ]

  adicionar(nome: String) {
    alert(nome);
  }

  atualizar(cidade: any) {
    alert(JSON.stringify(cidade));
  }

  excluir(id: number) {
    alert(id);
  }

}
