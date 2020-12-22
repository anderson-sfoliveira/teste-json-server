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
    this.consultar();
  }

  consultar() {
    this.cidadeService.consultar()
      .then(dados => {
        this.cidades = dados;
      })
      .catch(erro => {
        alert(erro)
      });
  }

  adicionar(nomeCidade: String) {
    this.cidadeService.adicionar({ nome: nomeCidade})
      .then(cidade => {
        alert(`Cidade "${cidade.nome}" adicionada com código ${cidade.id}!`);
        this.consultar();
      })
      .catch(erro => {
        alert(erro)
      });
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
      .then(c => {
        alert(`Cidade ${c.id} atualizada!`);
        this.consultar();
      })
      .catch(erro => {
        alert(erro)
      });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
      .then(() => {
        alert('Cidade excluída com sucesso!');
        this.consultar();
      })
      .catch(erro => {
        alert(erro)
      });
  }

}
