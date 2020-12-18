import { CidadeService } from './cidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades = [];

  constructor(private cidadeService: CidadeService) {}

  // este metódo é executado quando o componente for inicializado.
  ngOnInit() {
    this.cidadeService.consultar()
      .then(dados => {
        this.cidades = dados;
      });
  }

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
