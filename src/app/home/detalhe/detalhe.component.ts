import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DomSanitizer } from '@angular/platform-browser';
import { PesquisaService } from '../../pesquisa.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  public url: string;
  public resultados: string[] = [];

  constructor(private route: ActivatedRoute, private pesquisaService: PesquisaService, public sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {
      this.pesquisaService.getResultadoPorId(parametros.id)
        .subscribe((resposta: any) => {
          this.resultados = resposta.items;
          this.url = "https://www.youtube.com/embed/" + parametros.id;
        });
    });
  }

}
